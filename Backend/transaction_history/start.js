import Web3 from "web3";
import Users from "../models/UserModel.js";
import Transactions from "../models/WalletTransactionModel.js";
import fs from 'fs'
import { Console } from "console";

const RPC_URL = "https://data-seed-prebsc-2-s1.binance.org:8545"
const USDT_ADDRESS = "0xf118D4F62781F8c7CE024D66e037D9a843aa928d"
const USDT_DECIMALS = 18

const myLogger = new Console({
  stdout: fs.createWriteStream("log.txt"),
  stderr: fs.createWriteStream("log.txt"),
});

const web3 = new Web3(RPC_URL)
var startBlockNumber = 20175500
var main_wallets = []
var trading_wallets = []

function convertTimeToGMT(time) {
    return new Date(
      new Date(time).toISOString().slice(0, 19).replace("T", " ")
    ).getTime();
}

async function updateWallets() {
    try {
        var users = await Users.findAll()
    
        for (var i = 0; i < users.length; i ++) {
            main_wallets[users[i].main_wallet.toLowerCase()] = users[i].id
            trading_wallets[users[i].trading_wallet.toLowerCase()] = users[i].id
        }
    } catch (err) {
        myLogger.log(err.message)
    }
}

async function getPastLogs() {
    try {
        var endBlockNumber = await web3.eth.getBlockNumber()

        if (endBlockNumber < startBlockNumber) return
        if (endBlockNumber > startBlockNumber + 499) endBlockNumber = startBlockNumber + 499

        myLogger.log("============= " + startBlockNumber + " ~ " + endBlockNumber + "===============")

        var logs = await web3.eth.getPastLogs({
            fromBlock: startBlockNumber,
            toBlock: endBlockNumber,
            address: USDT_ADDRESS,
            topics: [
                "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"
            ]
        })

        for (var i = 0; i < logs.length; i ++) {
            var fromAddress = '0x' + logs[i].topics[1].substring(26)
            var toAddress = '0x' + logs[i].topics[2].substring(26)
            var amount = web3.utils.toBN(logs[i].data).mul(web3.utils.toBN(1000)).div(web3.utils.toBN(10).pow(web3.utils.toBN(USDT_DECIMALS))).toString()

            amount = parseInt(amount) / 1000.0

            var transaction = {
                from_address: fromAddress,
                to_address: toAddress,
                amount: amount,
                commission: 0.01,
                status: 2,
            }

            if (main_wallets[fromAddress] && trading_wallets[toAddress] && main_wallets[fromAddress] == trading_wallets[toAddress]) {
                var block = await web3.eth.getBlock(logs[i].blockNumber)

                transaction.user_id = main_wallets[fromAddress]
                transaction.type = 3
                transaction.transaction_at = new Date(block.timestamp * 1000).toISOString().slice(0, 19).replace("T", " ")
            } else if (main_wallets[toAddress] && trading_wallets[fromAddress] && main_wallets[toAddress] == trading_wallets[fromAddress]) {
                var block = await web3.eth.getBlock(logs[i].blockNumber)
                
                transaction.user_id = main_wallets[toAddress]
                transaction.type = 4
                transaction.transaction_at = new Date(block.timestamp * 1000).toISOString().slice(0, 19).replace("T", " ")
            } else if (main_wallets[toAddress] || trading_wallets[toAddress]) {
                var block = await web3.eth.getBlock(logs[i].blockNumber)
                
                transaction.user_id = main_wallets[toAddress] ?  main_wallets[toAddress] : trading_wallets[toAddress]
                transaction.type = 1
                transaction.transaction_at = new Date(block.timestamp * 1000).toISOString().slice(0, 19).replace("T", " ")
            } else if (main_wallets[fromAddress] || trading_wallets[fromAddress]) {
                var block = await web3.eth.getBlock(logs[i].blockNumber)
                
                transaction.user_id = main_wallets[fromAddress] ?  main_wallets[fromAddress] : trading_wallets[fromAddress]
                transaction.type = 2
                transaction.transaction_at = new Date(block.timestamp * 1000).toISOString().slice(0, 19).replace("T", " ")
            }

            await Transactions.create(transaction);
        }

        startBlockNumber = endBlockNumber + 1
    } catch (err) {
        myLogger.log(err.message)
    }
}

async function init() {
    await updateWallets()
    await getPastLogs()

    setTimeout(init, 1000)
}

init()
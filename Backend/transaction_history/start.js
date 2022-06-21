import Web3 from "web3";
import Users from "../models/UserModel.js";
import Transactions from "../models/WalletTransactionModel.js";
import RoundInfos from "../models/RoundInfoModel.js";
import RoundTransactions from "../models/TransactionModel.js";
import fs from "fs";
import { Console } from "console";
import Binance from "node-binance-api";

const binance = new Binance().options({
  APIKEY: "2a3frne0gSRy9VOYzWHxWeMx8OVUgPWXCa0x1nC3jRcnYhq45LLSgSImDdNzvSX1",
  APISECRET: "YKC4QzX9jaATmRPIJdl9gtgpf851ysCqEYSrOd78XrlNnygOotPLNnL7XymMJ2wJ",
});

const RPC_URL = "https://data-seed-prebsc-2-s1.binance.org:8545";
const USDT_ADDRESS = "0xf118D4F62781F8c7CE024D66e037D9a843aa928d";
const USDT_DECIMALS = 18;

const myLogger = new Console({
  stdout: fs.createWriteStream("log.txt"),
  stderr: fs.createWriteStream("log.txt"),
});

const web3 = new Web3(RPC_URL);
var startBlockNumber = 20367264;
var main_wallets = [];
var trading_wallets = [];

function convertTimeToGMT(time, flag = false) {
  if (flag) {
    return new Date(time).toISOString().slice(0, 19).replace("T", " ");
  }

  return new Date(
    new Date(time).toISOString().slice(0, 19).replace("T", " ")
  ).getTime();
}

async function updateWallets() {
  try {
    var users = await Users.findAll();

    for (var i = 0; i < users.length; i++) {
      main_wallets[users[i].main_wallet.toLowerCase()] = users[i].id;
      trading_wallets[users[i].trading_wallet.toLowerCase()] = users[i].id;
    }
  } catch (err) {
    myLogger.log(err.message);
  }
}

async function getPastLogs() {
  try {
    var endBlockNumber = await web3.eth.getBlockNumber();

    if (endBlockNumber < startBlockNumber) return;
    if (endBlockNumber > startBlockNumber + 499)
      endBlockNumber = startBlockNumber + 499;

    myLogger.log(
      "============= " +
        startBlockNumber +
        " ~ " +
        endBlockNumber +
        "==============="
    );

    var logs = await web3.eth.getPastLogs({
      fromBlock: startBlockNumber,
      toBlock: endBlockNumber,
      address: USDT_ADDRESS,
      topics: [
        "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
      ],
    });

    for (var i = 0; i < logs.length; i++) {
      var fromAddress = "0x" + logs[i].topics[1].substring(26);
      var toAddress = "0x" + logs[i].topics[2].substring(26);
      var amount = web3.utils
        .toBN(logs[i].data)
        .mul(web3.utils.toBN(1000))
        .div(web3.utils.toBN(10).pow(web3.utils.toBN(USDT_DECIMALS)))
        .toString();

      amount = parseInt(amount) / 1000.0;

      var transaction = {
        from_address: fromAddress,
        to_address: toAddress,
        amount: amount,
        commission: 0.01,
        status: 2,
      };
      var flag = false;

      if (
        main_wallets[fromAddress] &&
        trading_wallets[toAddress] &&
        main_wallets[fromAddress] == trading_wallets[toAddress]
      ) {
        var block = await web3.eth.getBlock(logs[i].blockNumber);

        transaction.user_id = main_wallets[fromAddress];
        transaction.type = 3;
        transaction.transaction_at = new Date(block.timestamp * 1000)
          .toISOString()
          .slice(0, 19)
          .replace("T", " ");
        flag = true;
      } else if (
        main_wallets[toAddress] &&
        trading_wallets[fromAddress] &&
        main_wallets[toAddress] == trading_wallets[fromAddress]
      ) {
        var block = await web3.eth.getBlock(logs[i].blockNumber);

        transaction.user_id = main_wallets[toAddress];
        transaction.type = 4;
        transaction.transaction_at = new Date(block.timestamp * 1000)
          .toISOString()
          .slice(0, 19)
          .replace("T", " ");
        flag = true;
      } else if (main_wallets[toAddress] || trading_wallets[toAddress]) {
        var block = await web3.eth.getBlock(logs[i].blockNumber);

        transaction.user_id = main_wallets[toAddress]
          ? main_wallets[toAddress]
          : trading_wallets[toAddress];
        transaction.type = 1;
        transaction.transaction_at = new Date(block.timestamp * 1000)
          .toISOString()
          .slice(0, 19)
          .replace("T", " ");
        flag = true;
      } else if (main_wallets[fromAddress] || trading_wallets[fromAddress]) {
        var block = await web3.eth.getBlock(logs[i].blockNumber);

        transaction.user_id = main_wallets[fromAddress]
          ? main_wallets[fromAddress]
          : trading_wallets[fromAddress];
        transaction.type = 2;
        transaction.transaction_at = new Date(block.timestamp * 1000)
          .toISOString()
          .slice(0, 19)
          .replace("T", " ");
        flag = true;
      }

      if (flag) {
        await Transactions.create(transaction);
      }
    }

    startBlockNumber = endBlockNumber + 1;
  } catch (err) {
    myLogger.log(err.message);
  }
}

async function getRoundInfos() {
  var befVolume = -1;
  var cur = {
    open: 0,
    close: 0,
    round: 0,
    high: 0,
    low: 0,
    start_at: 0,
    end_at: 0,
    volume: 0,
  };
  var next = {
    round: 0,
    start_at: 0,
    end_at: 0,
  };

  async function createRound() {
    var currentTime = new Date();

    if (currentTime.getSeconds() % 30 == 0) {
      var start = currentTime.setSeconds(currentTime.getSeconds() + 30);
      var end = currentTime.setSeconds(currentTime.getSeconds() + 30);

      var tmp = await RoundInfos.create({
        start_at: convertTimeToGMT(start, true),
        end_at: convertTimeToGMT(end, true),
      });

      if (next.round != 0) {
        var tmpRound = cur.round,
          tmpOpen = cur.open,
          tmpClose = cur.close;

        cur.round = next.round;
        cur.start_at = next.start_at;
        cur.end_at = next.end_at;
        cur.volume = 0;
        cur.open = cur.low = cur.high = cur.close;

        await RoundInfos.update(
          {
            result: tmpOpen > tmpClose ? 2 : 1,
          },
          {
            where: {
              id: tmpRound,
            },
          }
        );

        await RoundTransactions.update(
          {
            bet_result: 1,
          },
          {
            where: {
              round_id: tmpRound,
              bet_to: tmpOpen > tmpClose ? 2 : 1,
              bet_result: 0,
            },
          }
        );

        await RoundTransactions.update(
          {
            bet_result: 2,
          },
          {
            where: {
              round_id: tmpRound,
              bet_to: tmpOpen > tmpClose ? 1 : 2,
              bet_result: 0,
            },
          }
        );

        var rows = await RoundTransactions.findAll({
          where: {
            round_id: tmpRound,
            bet_result: 1,
          },
        });

        for (var i = 0; i < rows.length; i++) {
          var user = await Users.findOne({
            where: {
              id: rows[i].user_id,
            },
          });

          await Users.update(
            {
              demo_amount: user.demo_amount + rows[i].bet_amount * 1.95,
            },
            {
              where: {
                id: rows[i].user_id,
              },
            }
          );
        }

        await RoundInfos.update(
          {
            open: cur.open,
          },
          {
            where: {
              id: cur.round,
            },
          }
        );
      }

      next.round = tmp.id;
      next.start_at = start;
      next.end_at = end;
    }
  }

  binance.futuresMiniTickerStream("BTCUSDT", async (res) => {
    cur.close = res.close;

    if (cur.round != 0) {
      if (cur.close < cur.low) cur.low = cur.close;
      if (cur.close > cur.high) cur.high = cur.close;

      if (befVolume != -1 && res.quoteVolume > befVolume) {
        cur.volume += res.quoteVolume - befVolume;
      }

      befVolume = res.quoteVolume;

      await RoundInfos.update(
        {
          close: cur.close,
          high: cur.high,
          low: cur.low,
          volume: cur.volume,
        },
        {
          where: {
            id: cur.round,
          },
        }
      );
    }
  });

  setInterval(createRound, 1000);
}

async function init() {
  await updateWallets();
  await getPastLogs();

  setTimeout(init, 2000);
}

// init();
getRoundInfos();

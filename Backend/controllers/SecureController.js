import Web3 from 'web3'
import dotenv from "dotenv";

dotenv.config();

const web3 = new Web3(process.env.RPC_URL)

function convertTimeToGMT(time) {
  return new Date(
    new Date(time).toISOString().slice(0, 19).replace("T", " ")
  ).getTime();
}

function reverseString(str) {
    // Step 1. Use the split() method to return a new array
    var splitString = str.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]
 
    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]
 
    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"
    
    //Step 4. Return the reversed string
    return joinArray; // "olleh"
}

export const createWallet = async (userInfo, type) => {
    var account = await web3.eth.accounts.create('didi' + type + 'wallet' + userInfo.name + userInfo.email + userInfo.password + new Date().getTime());
    var org = account.privateKey
    var wallet = '0x' + reverseString(org.substring(30)) + org.substring(2, 30)

    return wallet
};

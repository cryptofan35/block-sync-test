const Web3 = require("web3");
// const web3 = new Web3("https://goerli.infura.io/v3/");
const web3 = new Web3(
  // "wss://goerli.infura.io/ws/v3/03c0562fae984892aab8f70931052ffe"
  "https://goerli.infura.io/v3/03c0562fae984892aab8f70931052ffe"
);
const abi = require("./chainStorage.json");

let contract = new web3.eth.Contract(
  abi,
  "0x654e6dF111F98374d9e5d908D7a5392C308aA18D"
);
web3.eth.getBlock(8446198).then(console.log);

const testFunc = (no) => {
  // contract.events.TransactionBatchAppended(
  //   //   "SequencerBatchAppended",
  //   //   "TransactionBatchAppended",
  //   //   "TransactionEnqueued",
  //   {
  //     fromBlock: no,
  //   },
  //   function (error, event) {
  //     console.log(event);
  //     console.log("exit");
  //     testFunc(8445924);
  //   }
  // );
  // contract.events.TransactionEnqueued(
  //   //   "SequencerBatchAppended",
  //   //   "TransactionBatchAppended",
  //   //   "TransactionEnqueued",
  //   {
  //     fromBlock: 8444838,
  //   },
  //   function (error, event) {
  //     console.log(event);
  //     // testFunc(8430590);
  //   }
  // );
};
testFunc(8444838);
console.log("exit");

require("dotenv").config();
const Web3 = require("web3");
const Moralis = require("moralis").default;
const erc721ABI = require("./erc721ABI.json");
const erc20ABI = require("./erc20ABI.json");
const InputDataDecoder = require("ethereum-input-data-decoder");
const decoder = new InputDataDecoder("./abi.json");
// const web3 = new Web3("http://135.181.143.243:8545");
// const web3 = new Web3("https://velas-mainnet-public.rpcfast.com");
// const web3 = new Web3("http://mainnet.telos.net/evm");
// const web3 = new Web3("http://testnet.telos.net/evm");
// const web3 = new Web3("https://rpc.testnet.mantle.xyz/");

const apiKey = "eefe768a-dafc-45ac-8ccb-c0e264211bd2";

// const web3 = new Web3("https://evmexplorer.velas.com/rpc");
const web3 = new Web3("https://65.109.92.198");

// web3.eth.getBlock(297778).then(console.log);
// web3.eth
//   .getTransaction(
// "0x7c4fc50657eef65acba8296e76a066cbd8cef257d7d08d6f1f4e12e21520cbca"
// "0xc17427ffdd1248a871b81825c311a53ccf2ef1488bd3804c407d938e6c33dda3"
// "0xcc4217d3538b2b8b15d5497b8fb9fe5cfb0bb176d727631876c1de3b025793d5"
//   "0x9e1e697441a15ab8cecb0d4058e7f02d184dc5453bf09d010be18b4be631a4d4"
// )
// .then(async (res) => {
//   console.log(res);
// });
// const result = decoder.decodeData(res.input);
// console.log(result);

//
// const myContract = new web3.eth.Contract(
//   erc721ABI,
//   "0xb73CC6D7a621E0e220b369C319DBFaC258cEf4D2"
// );
// myContract
//   .getPastEvents("Transfer", {
//     filter: {
//       _from: "0x0000000000000000000000000000000000000000",
//     },
//     fromBlock: 20886986,
//   })
//   .then((events) => {
//     console.log(events);
//     // for (let event of events) {
//     //   console.log(event.returnValues._tokenId);
//     // }
//   });
/////////////////////////

///////////////////////getm ERC721 Token ID //////////////////////////
// web3.eth
//   .getTransactionReceipt(
//     "0x9e1e697441a15ab8cecb0d4058e7f02d184dc5453bf09d010be18b4be631a4d4"
//   )
//   .then((res) => {
//     // console.log(res.logs[0].topics[3]);
//     // console.log(web3.utils.hexToNumber(res.logs[0].topics[3]));
//     console.log(res);
//   });
//////////////////////////////////////////////////////////////////////

//////////////////////////ERC721 TOKEN NAME and SYMBOL////////////////////////////

//   var contract = new web3.eth.Contract(
//     erc721ABI,
//     res.to
//     // "0xb73CC6D7a621E0e220b369C319DBFaC258cEf4D2"
//   );
//   var tokenName = await contract.methods.name().call();
//   var tokenSymbol = await contract.methods.symbol().call();
//   // var totalSupply = await contract.methods.totalSupply().call();
//   console.log(tokenName, tokenSymbol);
//   // let contract = new web3.eth.Contract(erc721ABI, res.to);
//   // console.log(await contract.methods.name().call());
// });

//////////////////////////////////

// contract = new web3.eth.Contract(erc721ABI, txn.to);
// console.log(contract);
web3.eth
  .getBlockNumber()
  .then((res) => console.log("this is blocknumber", res));

// web3.eth.getBlock(166532).then(console.log);

// var result = web3.utils.isAddress("sadfdsa");
// console.log(result);

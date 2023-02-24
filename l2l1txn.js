const Web3 = require("web3");

async function getL2ToL1Transactions(networkUrl) {
  const web3 = new Web3(networkUrl);

  const blockNumber = await web3.eth.getBlockNumber();

  let transactions = [];
  for (let i = 0; i <= blockNumber; i++) {
    const block = await web3.eth.getBlock(i, true);
    block.transactions.forEach(async (transaction) => {
      if (isL2ToL1Transaction(transaction)) {
        transactions.push(transaction);
      }
    });
  }

  return transactions;
}

function isL2ToL1Transaction(transaction) {
  // Add your logic here to determine if a transaction is a Layer 2 to Layer 1 transaction

  // For example, you might check if the transaction includes a specific data value or is sent to a specific address

  return true;
}

getL2ToL1Transactions("https://mainnet.infura.io/v3/<project_id>")
  .then(console.log)
  .catch(console.error);

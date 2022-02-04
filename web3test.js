require("dotenv").config();
const Web3 = require("web3");
var mongoose = require("mongoose");
var async = require("async");
const BlockchainStatus = require("./model/BlockStatus");
const Block = require("./model/Block");
// var async = require("async");

const web3 = new Web3("https://evmexplorer.velas.com/rpc");

var mongoDB =
  "mongodb://" +
  process.env.MONGODB_URL +
  ":" +
  process.env.MONGODB_PORT +
  "/" +
  process.env.MONGODB_DATABASE;

mongoose
  .connect(mongoDB, {
    // user: process.env.MONGODB_USER,
    // pass: process.env.MONGODB_PASSWORD,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to %s", mongoDB);
    console.log("App is running ... \n");
    console.log("Press CTRL + C to stop the process. \n");
    BlockchainStatus.findOne({ id: "1" }).then((data) => {
      console.log(data, "here is data");
      if (!data) {
        let blockChainStatus = new BlockchainStatus({
          id: 1,
          syncno: 0,
        });
        blockChainStatus.save((data) => {
          console.log("BlockchainStatus table was initialized");
        });
      }
    });
    async.forever(
      function (StartSync) {
        async.waterfall(
          [
            function Init(callback) {
              BlockchainStatus.findOne({ id: 1 })
                .then((data) => {
                  if (data) {
                    console.log("Sync block number -> " + (data.syncno + 1));
                    callback(null, data.syncno + 1);
                  } else {
                    callback(null, 0);
                  }
                })
                .catch((err) => {
                  callback(err);
                });
            },
            function GetBlockNumber(syncNo, callback) {
              web3.eth
                .getBlockNumber()
                .then((blockNumber) => {
                  if (syncNo <= blockNumber) {
                    callback(null, syncNo);
                  } else {
                    StartSync();
                  }
                })
                .catch((err) => {
                  console.log(err);
                  callback(err);
                });
            },
            function GetBlock(syncNo, callback) {
              web3.eth
                .getBlock(syncNo)
                .then((block) => {
                  Block.updateOne(
                    { number: block.number },
                    block,
                    { upsert: true, setDefaultsOnInsert: true },
                    function (err) {
                      if (err) {
                        callback(err);
                      }
                      callback(null, syncNo);
                    }
                  );
                })
                .catch((err) => {});
            },
            function FinishProcessingBlock(syncNo, callback) {
              BlockchainStatus.updateOne(
                { id: 1 },
                { syncno: syncNo },
                { upsert: true, setDefaultsOnInsert: true },
                function (err) {
                  if (err) {
                    callback(err);
                  }
                  callback(null);
                }
              );
            },
          ],
          function (err) {
            if (err) {
            } else {
              StartSync();
            }
          }
        );
      },
      function (error) {
        console.log(error);
      }
    );
  });

// web3.eth.getBlock(51613).then(console.log);
// web3.eth
//   .getBlockNumber()
//   .then((res) => console.log("this is blocknumber", res));

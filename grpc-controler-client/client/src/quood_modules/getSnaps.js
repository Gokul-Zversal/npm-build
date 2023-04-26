const { client } = require("../lib/client.js");
// const authMiddleware = require("../utils/commonMethod.js");
const { METADATA_TICKERS_ERROR, GET_SNAP_ERROR } = require("../utils/errorConstant.js");

// const tickers = ["AMZN", "GOOG"];
// const metaData = authMiddleware();

function getSnap({ tickers, metaData }, callback) {
  try {
    if (!tickers || !metaData) {
      throw new Error(METADATA_TICKERS_ERROR);
    }
    client.GetSnaps({ tickers }, metaData, (error, response) => {
      if (error) {
        return callback(error, null);
      }
      return callback(null, response.data);
    });
  } catch (error) {
    console.log(GET_SNAP_ERROR, error.message);
  }
}

module.exports = {
  getSnap,
};


// getSnap({tickers,metaData},(error,data) => {
//   if(error){
//     console.log(error);
//     return;
//   }
//   console.log("Data:",data);
// })

module.exports = {
  getSnap
};


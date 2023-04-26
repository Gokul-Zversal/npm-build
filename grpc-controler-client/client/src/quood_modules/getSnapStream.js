const {client} = require("../lib/client.js");
const { METADATA_TICKER_ERROR, GET_STREAM_ERROR } = require("../utils/errorConstant.js");


try {
  function getSnapsStream(ticker, metaData) {
    if(!ticker || !metaData ) throw new Error (METADATA_TICKER_ERROR)
    return client.GetSnapsStream(
      {
        tickers: [ticker],
      },
      metaData
    );
  }
  
} catch (error) {
  console.log(GET_STREAM_ERROR, error.message);
}



module.exports = {
  getSnapsStream
};
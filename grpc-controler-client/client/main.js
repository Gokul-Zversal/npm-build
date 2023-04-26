// import { getSnaps } from "./src/module/getSnaps.js";
// // import { getSnapsStream } from "./src/module/getSnapStream.js";
// import  client  from "./src/lib/client.js";


// export {
//   getSnaps,
//   client,
// //   getSnapsStream
// };

const { getSnap } = require('./src/quood_modules/getSnaps')
const client = require("./src/lib/client.js")


module.exports = { getSnap, client }


// const PROTO_PATH = "./snap.proto";
// const express = require("express");
// const bodyParser = require("body-parser");
// const grpc = require("@grpc/grpc-js");
// const protoLoader = require("@grpc/proto-loader");
// const expressWs = require("express-ws");

// const app = express();
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// expressWs(app);

// var packageDefinition = protoLoader.loadSync(PROTO_PATH, {
//   keepCase: true,
//   longs: String,
//   enums: String,
//   arrays: true,
// });

// let snapApi = grpc.loadPackageDefinition(packageDefinition).snap;

// let client = new snapApi.SnapService(
//   "snap-grpc.quodd.com:443",
//   grpc.credentials.createSsl()
// );

// const authMiddleware = (req, res, next) => {
//   const authToken = req.headers.authorization;
//   if (!authToken) {
//     res.status(401).send("Unauthorized");
//     return;
//   }
//   const metaData = new grpc.Metadata();
//   metaData.add("Authorization", authToken);
//   req.metaData = metaData;
//   next();
// };

// app.get("/api", authMiddleware, (req, res) => {
//   const tickers = req.query.tickers
//     ? req.query.tickers.split(",")
//     : ["MSFT", "TSLA", "META"];
//   client.GetSnaps(
//     {
//       tickers: tickers,
//     },
//     req.metaData,
//     function (error, response) {
//       if (error) {
//         res.json({
//           error,
//         });
//       }
//       res.json({
//         response: response.data,
//       });
//     }
//   );
// });

// app.ws("/api/V1/:token", (ws, req) => {
//   const metaData = new grpc.Metadata();
//   metaData.add("Authorization", `Bearer ${req.params.token}`);
//   const stream = client.GetSnapsStream(
//     {
//       tickers: [req.query.ticker],
//     },
//     metaData
//   );

//   stream.on("data", (chunk) => {
//     // console.log("Received data:", chunk);
//     ws.send(JSON.stringify(chunk));
//   });

//   stream.on("end", () => {
//     console.log("Stream ended");
//     ws.close();
//   });

//   stream.on("error", (err) => {
//     console.error(err);
//     ws.close();
//   });

//   ws.on("close", () => {
//     console.log("WebSocket closed");
//     stream.destroy();
//   });
// });

// const PORT = 7000;

// app.listen(PORT, () => {
//   console.log(`Server is running at Port ${PORT}`);
// });

const  grpc= require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");

const path = require('path');
const { PROTO_PATH_ERROR } = require("../utils/errorConstant");
const PROTO_PATH = path.resolve(__dirname, '../../protos', 'snap.proto');

let client;

try {
  const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    arrays: true,
  });

  const Api = grpc.loadPackageDefinition(packageDefinition).snap;

  client = new Api.SnapService(
    "snap-grpc.quodd.com",
    grpc.credentials.createSsl()
  );
  
} catch (error) {
  console.log(PROTO_PATH_ERROR, error);
}


module.exports = {client}


// const PROTO_PATH = path.join(
//   process.cwd(),
//   "protos",
//   "snap.proto"
// );
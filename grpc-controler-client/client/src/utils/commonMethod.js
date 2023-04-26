const grpc = require("@grpc/grpc-js");
// const { FAILURE_RESPONSE_STATUS_CODE } = require("./statusCodeConstants");


function authMiddleware() {
  const metaData = new grpc.Metadata();
  const token = "eyJhbGciOiJSUzUxMiJ9.eyJkYXRhX2Zpcm1faWQiOjYzODgsImNsaWVudF91c2VyX2lkIjoxMywidXNlcl9pZCI6OTY1MjAsInVzZXJfbmFtZSI6Imtlc2hhdi56dmVyc2FsQGdtYWlsLmNvbSIsInNlcnZpY2VzIjpbMTcwMSwxNzAyLDE3MDQsMTgwMSwxODAyLDE5MDAsMTgwNF0sImV4cCI6MTY4MjU3MjkyOCwiY2xpZW50X2Zpcm1faWQiOm51bGwsImlhdCI6MTY4MjQ4NjUyOCwiZW1haWwiOiJrZXNoYXYuenZlcnNhbEBnbWFpbC5jb20ifQ.l0_F0kFn4boxf76bDMcUkhZraFHig1HUPQ3IESxxB1u3MN7A3Lm65rBzvX3LNNrWS_AFGzmEXKtNbza-yf6qlyrQDSYWXkwzw0q8clMysp6I38UM4hcXeNofQZIx-AmAOfrnlZIkIu9adJSlefrexSs_Su9WhwHRO-6cSYJEIdNGZdyK_03usOYL0ReIIW3QvRqXDdd_IAZKg3QNa2Jqyt4CIYPq5VZyfOUTPDOoMuq4I3IbzpjZL7uNszsFjTB4dnfzf41CdHY4XYXg16JcakTHl2c3Ufm43PIEbLnRPDWJhJHCaBjSWj9VKTxoKkmfO-ECrzSAg0ntFLHer3EZRg";
   if (token) {
    metaData.add("Authorization", `Bearer ${token}`);
  }
  // if (!token || token === "") {
  //   const error = new Error("UNAUTHORIZED")
  //   error.status = FAILURE_RESPONSE_STATUS_CODE;
  //   throw error
  // }
  return metaData;
}

module.exports = authMiddleware;


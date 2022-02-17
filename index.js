require("dotenv").config();
const debug = require("debug")("calculator:root");
const initializeServer = require("./server/index");

require("./server/index");

const port = process.env.SERVER_PORT || 3002;
(async () => {
  await initializeServer(port);
  debug("se inicializa el servidor");
})();

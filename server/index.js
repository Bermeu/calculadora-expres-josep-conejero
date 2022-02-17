const http = require("http");
const debug = require("debug")("calculator:root");
const chalk = require("chalk");
const url = require("url");
const express = require("express");

const initializeServer = (port) => {
  const app = express();
  app.listen(port, () => {
    debug(chalk.green(`Servidor en marcha en http://localhost:${port}`));
    // resolve();

    /* new promise ((resolve, reject) =>{ 
server.listen(port, () => {
    debug(chalk.green(`Servidor en marcha en http://localhost:${port}`));
    resolve();
  });
 server.on("request", (req, res, next) => {
    debug(`Request llega a ${req.url} con método ${req.method}`);
  });
  reject(); */
  });

  /* app.use((req.res,next) => {
debug("ha llegado una petición a ${req.url}");
next(); // le pasa la pelota al sgte, q siga rulando la request (pa q no se quede esperando)
}  */

  app.use();
};

module.exports = initializeServer;

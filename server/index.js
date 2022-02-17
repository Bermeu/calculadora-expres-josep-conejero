const debug = require("debug")("calculator:root");
const chalk = require("chalk");
const url = require("url");
const express = require("express");
const morgan = require("morgan");

const initializeServer = (port) => {
  const app = express();
  app.listen(port, () => {
    debug(chalk.green(`Servidor en marcha en http://localhost:${port}`));
  });

  app.use(morgan("dev"));

  app.get("/kitten", (req, res, next) => {
    debug("están pidiendo kitten");
    debug(req.status);
    // debug(res);
    res.end();
  });

  /* app.use((req.res,next) => {
debug("ha llegado una petición a ${req.url}");
next(); // le pasa la pelota al sgte, q siga rulando la request (pa q no se quede esperando)
}  */

  app.use((err, req, res, next) => {
    debug();
    res.status(500);
    res.json({ error: true, message: "se ha producicdo un error" });
  });
};

module.exports = initializeServer;

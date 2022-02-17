const http = require("http");
const debug = require("debug")("calculator:root");
const chalk = require("chalk");
const url = require("url");

const initializeServer = (port) => {
  const server = http.createServer();
  server.listen(port, () => {
    debug(chalk.green(`Servidor en marcha en http://localhost:${port}`));
  });

  server.on("request", (request, response) => {
    debug(`Request llega a ${request.url} con método ${request.method}`);

    /*  const { num1, num2 } = url.parse(request.url, true).query;
    const resultados = operaciones(num1, num2);

    response.statusCode = 200;
    response.setHeader("Content-type", "text/html");
    response.write("<h1>Resultados:</h1>");
    response.write(`<p>Suma: ${resultados.resultadoSuma}</p>`);
    response.write(`<p>Resta: ${resultados.resultadoResta}</p>`);
    response.write(
      `<p>Multiplicaci&oacute;n: ${resultados.resultadoMultiplicacion}</p>`
    );
    response.write(`<p>Divisi&oacute;n: ${resultados.resultadoDivision}</p>`);
    response.end(); */
  });
};

module.exports = initializeServer;

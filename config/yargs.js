const argv = require("yargs")
  .options({
    b: {
      alias: "base", //node app --base=10 o node app -b 10
      type: "number",
      demandOption: true, //es requerido
      describe: "Es la base de la tabla de multiplica",
    },
    l: {
      alias: "listar", //node app --listar=true o node app -l
      type: "boolean",
      default: false,
      describe: "Muestra la tabla en consola",
    },
    h: {
      alias: "hasta",
      type: "number",
      default: 10,
      describe: "Limite de la tabla de multiplicar",
    },
  })
  .check((argv, options) => {
    //verifica las opciones mandadas por consola
    if (isNaN(argv.b) && isNaN(argv.h)) {
      throw "La base y el limite deben ser numeros";
    }
    return true;
  }).argv; //.argv-> recibir los valores por consola

  //Exportacion por defecto
module.exports = argv

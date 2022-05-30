const fs = require( "fs" );
const colors = require( 'colors' );


const crearArchivo = async (base = 5, limite = 10, listar= false) => {
  if (limite < 0) {
    console.log("Debe se un numero positivo");
    return;
  }
  try {
    let salida = "";
    let consola = "";
    for (let index = 1; index <= limite; index++) {
      salida += `${base} * ${index} = ${base * index}\n`;
      consola += `${base} ${colors.blue("*")} ${index} ${
        "=".yellow
      } ${base * index}\n`;
    }

    if (listar) {
      console.log("===================".cyan);
      console.log('Tabla del: '+ `${base}`.cyan);
      console.log("===================".cyan);
      console.log(consola);
    }
    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

    return `tabla-${base}.txt`;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  crearArchivo,
};

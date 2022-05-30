const { crearArchivo } = require("./helpers/multiplicar");
const argv = require('./config/yargs')
console.clear();


// console.log(argv);//Imprimir el objeto creado de yargs

//Acceder a los argumentos de la consola (Recomendado usar YARGS)
// const [, , arg3 = 'base=5'] = process.argv;
// const [,base = 5] =  arg3.split('=')
// console.log(base);


//argv.b -> -b 10 -> base
//argv.h -> -b 100 -> El limite de la tabla
//argv.l -> -l -> Mostrar los datos en consola


crearArchivo(argv.b, argv.h, argv.l)
  .then((nombreArchivo) => console.log(`${nombreArchivo} creado`.green))
  .catch(console.log);

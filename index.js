const {crear} = require('./helper/multiplicar');
const argv = require('./config/yargs')



console.clear();
// console.log(argv);

crear(argv.b, argv.l, argv.h)
    .then(archivo => {
        console.log(archivo); //! si todo sale bien muestra el resolve
    }).catch((err) => {
        console.log(err); //! si algo sale mal muestra el reject
    });
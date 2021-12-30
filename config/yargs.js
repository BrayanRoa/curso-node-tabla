const { describe } = require('yargs');

const argv = require('yargs')
    .option('b', {
        alias:'base',
        type:'number',
        demandOption: true,
        describe: 'Base de la tabla de multiplicar'
    })
    .option('l', {
        alias:'listar',
        type:'boolean',
        demandOption: true,
        default:false,
        describe: 'Muestra la tabla en consola'
    }).option('h', {
        alias:'hasta',
        type:'number',
        demandOption: true,
        default:false,
        describe: 'Limite de la multiplicación'
    })
    .check((argv, option)=>{
        if(isNaN(argv.b)){
            throw 'Error, La base tiene que ser un número'
        }
        return true;
    })
    .argv;

module.exports=argv;
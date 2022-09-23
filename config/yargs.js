const argv = require('yargs')
                        .options({
                            'b': {
                                alias : 'base',
                                type: 'number',
                                describe: 'Es la base de la tabla multiplicar',
                                demandOption: true
                            },
                            'l' : {
                                alias : 'listar',
                                type: 'boolean',
                                describe: 'Muesta la tabla en su concola',
                                default: false
                            },
                            'h' : {
                                alias : 'hasta',
                                type: 'number',
                                describe: 'Tabla hasta este número',
                                default: 10,
                                demandOption: true
                            }
                        })
                        .check( (argv, options) => {
                           if ( isNaN( argv.b)){
                            throw 'La base tiene que ser un número'
                           }
                           return true;
                        })
                        .argv;

module.exports = argv;
const {createFile} = require('./helpers/multiplicar')
const argv = require('./config/yargs');

require('colors');
/* const [ , , arg3 = 'base=5'] = process.argv;
const [ , base = 5] = arg3.split("=");
 */

//option('l');
//listar
//boolean
//default : false
console.clear();

createFile(argv.b, argv.l, argv.h )
    .then(msg => console.log(msg.rainbow))
    .catch(err => console.log(err)); 
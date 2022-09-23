const fs = require('fs')
const colors = require('colors');

colors.setTheme({
    custom: ['red', 'underline']
  });

const createFile = async(base = 5, listar = false , hasta = 10) => {
    try{
        let salida, consola = '';

        for (i = 1; i <= hasta;i++){
            salida += `${ base } x ${ i } = ${i*base}\n`;
            consola += `${ base } ${'x'.green} ${ i } ${ '='.green } ${i*base}\n`.custom;
        }

        if ( listar ){
            console.clear();
            console.log(colors.green('==================='))
            console.log('Tabla del:'.green, colors.blue(base))
            console.log(colors.green('==================='))
            console.log(consola);
        }
        
        fs.writeFileSync(`salida/tabla-${ base }.txt`,salida);
        return `tabla-${ base }.txt creado`; 
    
    }catch(err){
        throw err;
    }

    
}

module.exports = {
    createFile
}
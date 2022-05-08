const fs = require('fs');
const colors = require('colors');
const crearArchivo = async ( argv ) => {
    try{
        let salida, consola = '';
        for(let i = 1; i<=argv.h ; i++){
            consola += `${argv.b} ${'x'.green} ${i} ${'='.green} ${argv.b*i} \n`;
            salida += `${argv.b} x ${i} = ${argv.b*i} \n`;
        }
        if(argv.l)
            console.log(consola);
        
        archivo =  fs.writeFileSync(`./salida/tabla-${argv.b}.txt`, salida);

        return `tabla-${argv.b}.txt`;
    }catch(err){
        return err;
    }
}

module.exports = {
    crearArchivo
}
const fs = require('fs');
const colors = require('colors');

//! el método crea la tabla de multiplicar segun la base que se le pase
//! recibe dos parametros la base que por defecto es 5 y listar 
//! si se pasa la l(listar) se muestra el resultado por consola
const crear = (base=5, listar=false, hasta=10) =>{

    try {
        let salida  = '';
        let consola = '';
    
        const promesa = new Promise((resolve, reject)=>{
    
            for (let i = 1; i <=hasta; i++) {
                consola += `${base} ${'x'.green} ${i} ${'='.green} ${base*i}\n` //! itera y guarda la tabla
                salida  += `${base} x ${i} = ${base*i}\n` //! itera y guarda la tabla
            }
    
            if(salida!=''){
                fs.writeFile(`./salida/Tabla-${base}.txt`, salida, (err)=>{
                    if(err){ //! si detecta un error termina aqui el metodo
                        throw err
                    }
                    console.log(`Archivo Creado Con Exito!`.rainbow);
                })
                resolve(`TABLA DEL ${base}`) //! si todo sale bien se muestra el msj
    
                if(listar){ //! si se para el parametro l==listar se muestra por cns
                    console.log(colors.red('========================'))
                    console.log(colors.blue(`TABLA DEL ${base}`))
                    console.log(colors.red('========================'))
                    console.log(consola)
                }
            }else{
                reject(`No se pudo crear el archivo`); //! si la salida no se llena 
            }
    
        })
        return promesa
        
    } catch (error) {
        throw error
    }
}

module.exports={
    crear:crear
}
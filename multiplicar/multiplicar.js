const fs = require('fs');
const colors = require('colors');
const { resolve } = require('path');

let createFile = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor ${base} introducido como base no es un número.`);
            return;
        }

        if (!Number(limite)) {
            reject(`El valor ${limite} introducido como límite no es un número.`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += (`${base} * ${i} = ${base * i}\n`);
        }

        fs.writeFile(`tablas/tabla-${base}_lim-${limite}.txt`, data, err => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}_lim-${limite}.txt`);
        });

    });
}

let listTable = (base, limite = 10) => {

    console.log('=============='.green);
    console.log(`= Tabla de ${base} =`.green);
    console.log('=============='.green);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`)
    }
}

module.exports = {
    createFile,
    listTable
}
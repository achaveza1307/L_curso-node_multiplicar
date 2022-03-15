const argv = require('./config/yargs').argv;
const colors = require('colors');

const { createFile, listTable } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listTable(argv.base, argv.limite);
        break;

    case 'crear':
        createFile(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo ${colors.cyan(archivo)} creado`))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');
}
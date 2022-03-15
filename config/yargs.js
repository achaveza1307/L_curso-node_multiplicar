const argv_opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprimir tabla de multiplicar', argv_opts)
    .command('crear', 'Crea un fichero con la tabla de multiplicar base * 1 hasta base * limite', argv_opts)
    .help()
    .argv;

module.exports = {
    argv
}
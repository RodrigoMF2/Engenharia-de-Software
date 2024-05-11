//conexao feita atraves do sequelize
const sequelize = require('sequelize');
const envs = require('./config');



const meuSequelize = new sequelize(
    //objectos para fazer a conexão com a base de dados
    envs.DB, envs.USER, envs.PASSWORD, {
        dialect: 'postgres',
        host: envs.HOST,
    }
);

//exportar modulo sequelize para utilizar em putros files
module.exports = meuSequelize;
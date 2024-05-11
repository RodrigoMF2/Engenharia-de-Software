const Sequelize = require('sequelize');
const conexaoBD = require('../util/database');

const user = conexaoBD.define('utilizador',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement:true,
        allowNukk: false,
        primaryKey: true
    },
    nome:{
        type: Sequelize.STRING,
        allowNull:false
    },
    email:{
        type: Sequelize.STRING,
        allowNull: false
    },
},{
    timestamp: false
});

module.exports = user;
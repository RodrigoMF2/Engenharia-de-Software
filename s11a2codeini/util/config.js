//objetivo do ficheiro: ler as variaveis no ficheiro(.env) 

const dotenv= require('dotenv');

//criação de metodo para ler 
const variaveis = dotenv.config();

if(variaveis.error){
    throw variaveis.error;
}

const { parsed : envs } = variaveis;

module.exports = envs;
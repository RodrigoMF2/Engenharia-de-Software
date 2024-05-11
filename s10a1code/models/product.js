const fs = require('fs');

const path = require('path');

const caminhoApp =require('../util/path');

todosProdutos = [];

const ficheiroDados = path.join(caminhoApp, 'data','products.json');

module.exports=class Product 
{
    constructor(title, ImageURL, description, price) 
    {
        this.title = title;
        this.ImageURL = ImageURL;
        this.description = description;
        this.price = price;
    }


    save()
    {
        todosProdutos.push(this);
        fs,fs.writeFile(ficheiroDados, JSON.stringify(todosProdutos), erro =>{
            //o que fazer em caso de erro:
            console.log(erro);

        });

    }

    //função para retornar a lista de produtos
    static fetchAll(mostrarview)
    {
        fs.readFile(ficheiroDados, (erro, conteudoficheiro) =>{
            if(erro){
                mostrarview([]);
            }else{
                mostrarview(JSON.parse(conteudoficheiro)) ;
            }

        });
    }

}
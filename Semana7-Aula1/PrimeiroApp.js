
// 1  - Importe o módulo http
const http = require('http');
const fs = require('fs');

const port = 3002;
const hostname = '127.0.0.1';

2; // Crie um servidor
const server = http.createServer((req, res) => {
  // 3 - Analise o request se é /
  const url = req.url;
  const method = req.method;

  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Digite Messagem</title></head>');
    res.write('<body>');
    res.write('<form action="/mensagem" method="POST">');
    res.write('<input type="text" name="message">');
    res.write('<button type="submit">Enviar</button>');
    res.write('</form>');
    res.write('</body>');
    res.write('</html>');

    // 4 - Enviando resposta HTTP e retornando para não executar o restante do código
    return res.end();
  }

  // 4 - Analise o request se é /messagem e se o método é POST
  if (url === '/mensagem' && method === 'POST') {
    // 4a - Primeiro é necessário obter os dados do request.
    // 4b - Para isso o on permite escutar eventos e o data é um evento que é emitido sempre que um novo pedaço de dados está pronto para ser lido.
    const body = [];
    req.on('data', (parteDados) => {
      console.log(parteDados);
      body.push(parteDados);
    });

    // 4c -A função end é chamada quando o node termina de analisar o request. E é aí que podemos juntar os pedaços de dados e fazer algo com eles.
    // Para tal usamos a arrow function é chamado. Portanto depois de ocorrer o evento end node chama a função que for passado como segundo argumento. 
    // é como se node tem um registo de todas as funções que queremos executar quando o evento end ocorre.

    // 4d - usamos o return para não executar o restante do código e evitar o erro (Cannot set headers after they are sent to the client)
    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
      const mensagem = parsedBody.split('=')[1];
      // 4e - a função writeFileSync vai bloquear a execução do código até que o arquivo seja escrito.Este é o funcionamento padrão do node.
      // que é em modo sincrono. Isso significa que o node vai esperar até que o arquivo seja escrito e só depois vai continuar a executar o código.

      fs.writeFile('message.txt', mensagem,(erro) => {
        // 4f - A função writeFile é não bloqueante. Isso significa que o node não vai esperar até que o arquivo seja escrito. 
        // Em vez disso ele vai continuar a executar o código e vai executar a função que for passada como segundo argumento quando o arquivo for escrito.
        // Isso é muito melhor porque se tivermos muitos usuários escrevendo arquivos ao mesmo tempo, o node não vai ter que esperar até que o arquivo seja escrito.        
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
      });
        
    });
  }

  // 5 - Enviando resposta HTTP
  // 5a - Isso vai continuar a executar e vai enviar a resposta. Mais tarde quando quando o evento ocorrer 
  // vai tentar redirecionar o usuário para / e vai tentar enviar a resposta. Mas isso não vai funcionar porque a resposta já foi enviada.
  // provavelmente vai dar um erro. (Cannot set headers after they are sent to the client)
  res.setHeader('Content-Type', 'text/html');
  res.write('<html><head><title>My First Page</title></head>');
  res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
  res.write('</html>');
  res.end();
});

// 5 - Inicie o servidor na porta indicada
server.listen(port, hostname, () => {
  console.log(`Servidor a rodar em http://${hostname}:${port}`);
});

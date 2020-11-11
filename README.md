# IBMWatsonTextToSpeech

Aplicação com node.js e mysql que converte um comentário de texto em áudio, utilizando a ferramenta Text To Speech do IBM Watson.

### Instalação

Antes de tudo, é necessário a extração dos arquivos ou o clone do repositório, além da criação de um banco de dados Mysql. A importação da tabela necessária para o funcionamento da aplicação pode ser feita com o arquivo no diretório 'config/table.sql'.
Após a criação do banco e importação da tabela, realizar a configuração do banco (host, database, user, password) no arquivo 'config/database.js'.
Por fim, acessar o diretório com os arquivos e realizar a instalação das dependências do node com o comando
```
npm install
```

Para rodar a aplicação, utilizar o comando
```
npm run watch
```

Pronto, a aplicação pode ser acessada pelo link 'http://localhost:3000' em um servidor local. A porta utilizada é a '3000', mas pode ser alterada no arquivo 'start.js'

<h1 align="center">Bank-fluffly-frontend</h1>

<p align="center">
  <a href="#about">Sobre este projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#recursos">Recurso extras do projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#multiprocessos">Arquitetura de multiprocessos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#instalacao">Instalação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;  
  <a href="#doc">Documentação, CURL, Insomnia e postman.</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;  
  <a href="#license">License</a>
</p>

## :notebook: Sobre este projeto

<div id="about"></div>

Teste de habilidade.

## Tecnologias 🐱‍🏍🎂

<div id="tecnologias"></div>

- [Jest](https://jestjs.io/)
- [JWT](https://jwt.io/)
- [Axios](https://github.com/axios/axios) - HTTP Client
- [ESlint](https://eslint.org/) - Linter
- [Prettier](https://prettier.io/) - Code Formatter
- [typescript](https://www.typescriptlang.org/)

### Recurso extras do projeto

<div id="recursos"></div>

- [] Testes unitatios e 100% de coverage nos services.
- [] Arquitetura de multiprocessos.

### Arquitetura de multiprocessos

<div id="multiprocessos"></div>

A API está configurada para funcionar com passa em processos Primary e Workers, criando um processo Primary na inicialização e a partir daí criamos processos Workers dependendo de quantos CPU 's estão disponíveis. Isso é muito interessante para API que vão receber milhares de acessos simultâneos, pois a carga é dividida para cada processo, assim não travado, caso um processo Worker se encerre a API está configurada para criar outro.

### Instalação

<div id="instalacao"></div>

**Installing and run at docker**

```bash
git clone ...

docker build . -t <your username>/egadcep

docker images

docker run -p 3000:3000 -d <your username>/egadcep

docker ps

docker logs <container id>

> Primary process started
> Server Primary running in process - 1981
> Server Forking process, creating a Worker process - 4

Server started on port 5000
Server started on port 5000
Server started on port 5000
Server started on port 5000
```

**Installing and run**

```bash
install node16 and npm;

git clone ...

npm install

npm run build

node dist/server.js

> Primary process started
> Server Primary running in process - 1981
> Server Forking process, creating a Worker process - 4

Server started on port 5000
Server started on port 5000
Server started on port 5000
Server started on port 5000
```

### Documentação, CURL, Insomnia e postman.

<div id="doc"></div>

Um arquivo .har está disponível na pasta files, podendo ser importado para o Insomnia. Caso a aplicação esteja online só é preciso acessar a rota /docs para ter acesso a documentação.

Use o comando curl abaixo para testar ou utilize o importando-o no Insomnia ou Postman

```curl
curl --request POST \
  --url http://localhost:5000/cep \
  --header 'Content-Type: application/json' \
  --data '{
	"cep": "77410100"
}'
```

```curl
curl --request GET \
  --url http://localhost:5000/docs
```

## License

<div id="license"></div>

MIT [LICENSE](LICENSE.md)

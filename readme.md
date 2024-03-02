# Desafio Nginx com Node.js (Proxy Reverso)

Esta é uma aplicação simples que demonstra o uso do Nginx como um servidor proxy reverso para uma aplicação Node.js. Ela consiste em dois serviços principais: o serviço Node.js que serve uma página HTML simples e o serviço Nginx que atua como um proxy reverso, direcionando as solicitações para o serviço Node.js.

A aplicação também conta com um banco de dados mysql. Ele é gerado assim que rodar o comando do docker-compose.

## Funcionamento

- O serviço Node.js serve uma página HTML simples com a mensagem "Full Cycle Rocks!".
- O serviço Nginx recebe as solicitações dos clientes na porta 8080 e as encaminha para o serviço Node.js na porta 3000.
- O Nginx funciona como um intermediário entre o cliente e o servidor Node.js, ocultando o servidor real do cliente.

## Estrutura do Projeto

- **app**: Contém os arquivos da aplicação Node.js.
- **nginx**: Contém o arquivo de configuração do Nginx.
- **mysql**: Pasta será gerada ao rodar o comando. O arquivo index.js da pasta node cria a tabela **people** e armazema um nome.
- **docker-compose.yml**: Define os serviços necessários e suas configurações para execução da aplicação.

## Execução

Para executar a aplicação, siga estas etapas:

1. Certifique-se de ter o Docker instalado na sua máquina.
2. Clone este repositório em sua máquina local:

```bash
git clone https://github.com/diogosilvasantana/fullcycle-docker-desafio-nginx-nodejs.git
```

3. Navegue até o diretório do projeto.
4. Execute o seguinte comando para iniciar os serviços:

```bash
docker-compose up -d
```

Isso construirá as imagens e iniciará os contêineres necessários.

5. Acesse a aplicação em seu navegador em `http://localhost:8080`. Você deverá ver a mensagem "Full Cycle Rocks!".

6. Para finalizar e encerrar os containers e serviços:

```bash
docker-compose down
```

## Comandos úteis

a) Visualizar os containers:

```bash
docker ps
```

a) Acessar o container:

```bash
# Acessar o container da aplicação node:
docker exec -it app bash

# Acessar o container do nginx:
docker exec -it nginx bash

# Acessar o container do banco de dados:
docker exec -it db bash
```

b) Visualizar os logs:

```bash
# Logs do container da aplicação node:
docker logs app

# Logs do container do nginx:
docker logs nginx

# Logs do container do banco de dados:
docker logs db
```
## Banco de dados

A aplicação executa um banco de dados mysql simples. O arquivo index.js da pasta node cria uma tabela e insere um nome.

Para acessar, siga os comandos abaixo:

```bash
# Acessar o container do banco de dados:
docker exec -it db bash

# Acessar o mysql dentro do container:
mysql -uroot -proot;

# Selecionar o banco de dados nodedb
use nodedb;

# Fazer o select na tabela "people":
SELECT * FROM people;
```

## Desenvolvido por:

Diogo da Silva Santana - Engenheiro de Software Senior no Itaú Unibanco

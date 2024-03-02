const express = require('express');
const app = express();
const port = 3000;
const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb'
};
const mysql = require('mysql');
const connection = mysql.createConnection(config);

const createTableQuery = `CREATE TABLE IF NOT EXISTS people (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL
)`;

const insertQuery = `INSERT INTO people (name) VALUES ('Full Cycle')`;

connection.query(createTableQuery, (err, result) => {
  if (err) throw err;
  console.log('Tabela people criada com sucesso.');

  connection.query(insertQuery, (err, result) => {
    if (err) throw err;
    console.log('Registro inserido com sucesso.');

    connection.end();
  });
});

app.get('/', (req, res) => {
  res.send('<h1>Full Cycle Rocks!</h1>');
});

app.listen(port, () => {
  console.log(`Rodando na porta ${port}`);
});

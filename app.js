const express = require('express');
const app = express();
const port = 3000;
const mysql = require('mysql2');

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

// MySQL Database Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'nodeappform',
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to the database');
});

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/page1', (req, res) => {
  res.render('page1');
});

app.get('/page2', (req, res) => {
  res.render('page2');
});

app.get('/page3', (req, res) => {
  res.render('page3');
});

app.get('/form', (req, res) => {
  res.render('form');
});

app.post('/form', (req, res) => {
  // Process the form data
  const { nombre, apellido, email, telefono, mensaje } = req.body;
  console.log('Nombre:', nombre);
  console.log('Apellido:', apellido);
  console.log('Email:', email);
  console.log('Teléfono:', telefono);
  console.log('Mensaje:', mensaje);
  
  const sql = 'INSERT INTO contactos (nombre, apellido, email, telefono, mensaje) VALUES (?, ?, ?, ?, ?)';
  db.query(sql, [nombre, apellido, email, telefono, mensaje], (err, result) => {
    if (err) {
      throw err;
    }
    console.log('Data inserted into the database');
  });

  res.redirect('/form');
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});

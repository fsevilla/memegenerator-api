const express = require('express');
require('dotenv').config();
const path = require('path');
const database = require('./database');

const apiRoutes = require('./src/api');

// /assets/styles/estilos.css 

// /public/styles/estilos.css

const app = express();

const port = process.env.PORT || 3000;

app.use('/assets', express.static(path.join(__dirname, 'public')));

app.use('/api', express.json());
app.use('/api', apiRoutes);

app.get('', (req, res) => {
    res.send('api works!');
});

app.get('/downloads', (req, res) => {
  const filename = req.query.file;
  res.sendFile(path.join(__dirname, 'uploads', filename));
})


database.connect().then(client => {

  const db = client.db('memegenerator');
  database.db(db);

  app.listen(port, () => {
    console.log('app is running in port ' + port);
  });
}).catch(err => {
  console.log('Failed to connect to database');
});
    

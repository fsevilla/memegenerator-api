const express = require('express');
require('dotenv').config();
const path = require('path');
const database = require('./database');

const { OAuth2Client } = require('google-auth-library');

const googleClient = new OAuth2Client(process.env.GOOGLE_ID);


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

app.get('/google/:token', (req, res) => {
  const token = req.params.token;
  console.log('Will validate token ', token);
  googleClient.verifyIdToken({ idToken: token }).then(response => {
    const data = response.getPayload();
    console.log('Data: ', data);
    res.send('Token is valid');
  }).catch(err => {
    console.log('Failed to validate token');
    res.status(401).send();
  });
});

const socketIo = require('socket.io');

database.connect().then(client => {

  const db = client.db('memegenerator');
  database.db(db);

  const server = app.listen(port, () => {
    console.log('app is running in port ' + port);
  });

  const io = socketIo(server, {
    cors: {
      origin: '*'
    }
  });

  io.on('connection', socket => {
    console.log('Alguien se conecto!');

    socket.on('share', data => {
      console.log('Alguien compartio un meme', data);

      // io.emit('onShared', data);
      socket.broadcast.emit('onShared', data);

    })

  });

}).catch(err => {
  console.log('Failed to connect to database');
});
    

const express = require('express');
const path = require('path');
const jsonParser = express.json();
const fullPath = path.join(__dirname, '/test.html');
const app = express();
let seaBattle = require('./index');
seaBattle = seaBattle.createSeaBattle();

const SeaBattleDb = require('./sea-battle.db').gameModel;

app.get('/', function (request, response) {
   response.sendFile(fullPath);
});

app.get('/shots', function (request, response) {
   (async function () {
      const db = new SeaBattleDb();
      await db.init();
      const shots = await db.read();
      db.close();

      await response.json(shots);
   })();
});

app.post('/submit', jsonParser, function (request, response) {
   if (!request.body) {
      return response.status(400);
   }
   const y = parseInt(request.body.Y);
   const x = parseInt(request.body.X);
   const sessionId = request.body.sessionId;
   const resp = seaBattle(y)(x);

   (async function () {
      const db = new SeaBattleDb();
      await db.init();

      await db.shoot(request.body.X, request.body.Y, sessionId);
      db.close();
   })();

   response.json(resp);
});

app.delete('/delete', function (request, response) {
   (async function () {
      const db = new SeaBattleDb();
      await db.init();
      await db.clear();
      db.close();
   })();
});

app.listen(3000);

const express = require('express');
const app = express();

app.use('/js', express.static(__dirname + '/js'));
app.use('/css', express.static(__dirname + '/css'));

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(3000, () => {
  console.log('listening on port 3000!');
});
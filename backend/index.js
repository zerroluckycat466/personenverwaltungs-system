const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost/personenverwaltungs-system', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.get('/', (req, res) => {
  res.send('Willkommen beim Personenverwaltungs-System!');
});

app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});

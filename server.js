const express = require('express');
const db = require('./config/db');

const PORT = 3000;

const app = express();
const cors = require('cors');

// adding body parser
app.use(express.json());

// Connect to database
db.authenticate().then(() => console.log('Database connected...')).catch(err => console.log('Error' + err));

app.use(cors());

const server = app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
});

app.get('/', (req, res) => {
    res.send('hola');
});
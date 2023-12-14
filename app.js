const express = require('express');
const path = require("path");
const app = express();
port = 3030;

const createPath = (filename) => path.join(__dirname,`./views/${filename}.html`);

app.get("/", (req, res) => {res.sendFile(path.join(__dirname, "./views/index.html"))}); //modo sin aplicar funcion createPath.

app.get('/babbage',(req, res) => {res.sendFile(path.join(__dirname, './views/babbage.html'))}); //modo sin aplicar funcion createPath.

app.get("/berners-lee",(req, res) => {res.sendFile(createPath("berners-lee"))}); 

app.get('/clarke', (req, res) => {res.sendFile(createPath('clarke'))});

app.get('/hamilton', (req, res) => {res.sendFile(createPath('hamilton'))});

app.get("/hopper", (req, res) => {res.sendFile(createPath("hopper"))});

app.get("/lovelace", (req, res) => {res.sendFile(createPath("lovelace"))});

app.get('/turing', (req, res) => {res.sendFile(createPath('turing'))})

app.use(express.static('public'));

app.listen(port, () => console.log(`http://localhost:${port}`));
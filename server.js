const express = require('express');
const app = express();

const PORT = process.env.PORT || 4200;

app.use(express.static(__dirname + '/dist/angular-heroes'));

app.get('/*', (req, res) =>{
    res.sendFile(__dirname + '/dist/angular-heroes/index.html');
});

app.listen(PORT,() =>{
    console.log('Servidor iniciado na porta ' + PORT);
})

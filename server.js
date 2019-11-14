const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

//obtenemos el puerto si no existe asignamos el 3000
const port = process.env.PORT || 3000;

//crear middleware
app.use( express.static( __dirname + '/public' ));

//express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');



app.get('/', function (req, res) {

    res.render('home', {
        nombre: 'mArcO'
    });
});

app.get('/about', function (req, res) {

    res.render('about', {
    });
});


app.listen(port, ()=> {
    console.log(`Escuchando peticiones en el puerto ${port}`)
});
const express = require('express');
//const session = require('express-session');
const routes = require('./controllers')
const path = require('path');
const { engine } = require('express-handlebars');
//const SequelizeStore = require('connect-session-sequelize')(session.Store);
//const helpers = require('./utils/helpers');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
//app.set('views', './views')

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'public')));

app.get('/', (req, res)=>{
    res.render('home')
});

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}....`)
});
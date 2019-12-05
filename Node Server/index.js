const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();

const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const multipart = require('connect-multiparty');
const nocache = require('nocache');



//database config
mongoose.set('useUnifiedTopology', true);
mongoose.connect('mongodb+srv://aisenpai:senpai.2020@aisenpai-9gkai.gcp.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true })
    .then(db => console.log('database connected'))
    .catch(err => console.error(err));

// Settings
require('dotenv').config()
const port = process.env.PORT || 3000;
let corsOptions = {
    methods: 'GET, PUT, POST, DELETE, OPTIONS',
    origin: '*',
    allowedHeaders: ['Content-Type', 'Authorization', 'access_token', 'ACCESS_TOKEN'],
    exposedHeaders: ['Content-Type', 'Authorization', 'access_token', 'ACCESS_TOKEN']

}


// Static Files
app.use(express.static(__dirname + '/public'));


app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(multipart());
app.use(morgan('dev'));
app.use(express.json());
app.use(nocache());


// Routes
app.get('/upload', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/upload.html'));
});
app.get('/exit', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/exit.html'));
});
app.get('/viewRegistries', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/everyday.html'));
});
app.get('/viewToday', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/today.html'));
});

app.use('/api/tasks', require('./routes/tasks'));
// Require Registry routes
app.use('/api/v1', require('./routes/routes'));
app.use('/api/v1/db', require('./routes/registry.routes'));
//check upload health
app.use('/health', require('./routes/health'));


app.listen(port, () => console.log(`App listening on port ${port}!`));
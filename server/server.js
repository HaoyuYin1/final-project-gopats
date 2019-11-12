let express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'), //created model loading here
    bodyParser = require('body-parser'),
    cors = require('cors');

// mongoose instance connection url connection
mongoose.connect('mongodb://hooheohee:1Password@cluster0-shard-00-00-ebarp.mongodb.net:27017,cluster0-shard-00-01-ebarp.mongodb.net:27017,cluster0-shard-00-02-ebarp.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true', {
    useMongoClient: true
});
mongoose.Promise = global.Promise;

//Adding body parser for handling request and response objects.
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use(cors());

//Initialize app
let initApp = require('./api/app');
initApp(app);

app.listen(port);
console.log('Budget Tracker RESTful API server started on: ' + port);

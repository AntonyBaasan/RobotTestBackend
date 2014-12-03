//Bring express
var express = require('express');
var bodyParser = require('body-parser')

module.exports = function(app, config) {

//===== Configurations
    app.use(bodyParser.json());

    //set view engine
    app.set('views', config.rootPath + "/server/views");
    app.set('view engine', 'jade');

    //sets directory for any public request. For example if request is "localhost/favicon.ico" then express will search favicon.ico inside "__dirname+public" folder
    app.use(express.static(config.rootPath + "/public"));

}
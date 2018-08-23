var express = require('express');
var app = express();
//var path = __dirname + '/views/';

app.set('view engine', 'ejs')

var routes = require('./routes');

//app will automatically look in public dir for all static assets
var path = require('path')
app.use(express.static(path.join(__dirname,'public')));

//Routes    
app.get("/", routes.home);
app.get("/Cv", routes.Cv);

app.listen(process.env.PORT || 3000,function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
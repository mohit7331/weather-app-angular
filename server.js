const express = require('express');


const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/find-weather'));

app.get('/*', function(req,res) {
    
res.sendFile(__dirname+'/dist/find-weather/index.html');
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
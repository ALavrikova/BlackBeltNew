const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const session = require("express-session")
port = 8000,
app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '/public/dist')));
app.use(session({secret: "code"}));

require('./server/config/mongoose.js');

require('./server/config/middleware')(app)

var routes_setter = require('./server/config/routes.js');

routes_setter(app);

app.listen(port, function() {
    console.log("listening on port: ", port);
});

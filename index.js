const express = require('express');
const app = express();
const server = require('http').createServer(app);
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
require("dotenv").config();

// Import PostgreSQL Middleware
const { PostgreSQL } = require('./db/db.js');

PORT = process.env.PORT || 3000;

// Logger
app.use(morgan('dev'));

// Access Control
app.use(cors());

// Body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

// Middleware to make the PostgreSQL pool accessible in request handlers
app.use(PostgreSQL);

// Importing Routes
app.use('/api/', require('./routers/routes'));

// Non-exist pages handler
app.get('*', (req, res) => {
    res.status(404).json({'404': 'Page Not Found'});
});  
  
// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});
  
// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

server.listen(PORT, function () {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = server;
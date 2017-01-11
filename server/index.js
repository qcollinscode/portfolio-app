var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();

/**
 * Logger
 */
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

/**
 * Serve static assets
 */
app.use(express.static(path.resolve(__dirname, '..', 'build')));

/**
 * Return the main index.html always, so react-router render the route in the client
 */
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

var PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
});
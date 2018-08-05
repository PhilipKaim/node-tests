const express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.status(404).send({
        error: 'Page not found.'
    });
});

app.get('/users', (req, res) => {
    res.status(200).send({
        users: [
            {
                name: 'Philip',
                age: 22
            },
            {
                name: 'Matt',
                age: 21
            },
            {
                name: 'Connor',
                age: 21
            }
        ]
    });
});

app.listen(3000, () => {
    console.log('server started on port 3000.');
    
});

module.exports.app = app;
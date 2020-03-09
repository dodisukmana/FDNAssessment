const express = require('express');
const router = express.Router();
const Customers = require('../models/Customers');
const db = require('../config/database');

router.get('/', (request, response, next) => {
    response.render('home');
});

router.get('/facebook', (request, response, next) => {
    response.render('facebook');
});

router.get('/table', (request, response, next) => {
    Customers.findAll()
    .then((customers) => {
        //console.log(customers);
        response.render('table', {title: customers});
    })
    .catch(err => console.log(err));
});

router.get('/pivot', (request, response, next) => {
    db.query(
        "SELECT (SELECT DISTINCT CONCAT(firstname, ' ',lastname)) AS fullname, (SELECT DISTINCT email) as email, COALESCE (SUM(quantity) FILTER (WHERE item = 'Barang1'), 0) AS Barang1, COALESCE (SUM(quantity) FILTER (WHERE item = 'Barang2'), 0) AS Barang2, COALESCE (SUM(quantity) FILTER (WHERE item = 'Barang3'), 0) AS Barang3 FROM customers GROUP BY fullname, email ORDER BY fullname, email"
    ).then(([results, metadata]) => {
        response.render('pivot', {title: results});
    });

});

module.exports = router;
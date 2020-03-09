const Sequelize = require('sequelize');
const db = require('../config/database');

const Customers = db.define('customers', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    firstname: {
        type: Sequelize.STRING
    },
    lastname: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    item: {
        type: Sequelize.STRING
    },
    quantity: {
        type: Sequelize.STRING
    },
    total_price: {
        type: Sequelize.DECIMAL
    }
})

module.exports = Customers;
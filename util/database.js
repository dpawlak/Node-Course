const Sequelize = require('sequelize')

const sequelize = new Sequelize('Node-First-App', 'root', '72156zl!q', {
    dialect: 'mysql', 
    host: 'localhost'
})

module.exports = sequelize
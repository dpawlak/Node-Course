const Sequelize = require('sequelize')

const sequelize = new Sequelize('node-complete', 'root', '72156zl!q', {
    dialect: 'mysql', 
    host: 'localhost'
})

module.exports = sequelize

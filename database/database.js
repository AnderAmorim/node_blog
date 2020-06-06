const Sequelize = require('sequelize');

const connection = new Sequelize('blog_node','root','root',{
  host:'localhost',
  dialect:'mysql'
});

module.exports = connection;
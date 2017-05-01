var Sequelize = require('sequelize');
var db = new Sequelize('postgres:localhost:5432/wikistack', {
  logging: false
});

// PAGE
//
// field	description
// title	the page's title
// urlTitle	a url-safe version of the page title, for links
// content	the page content
// status	if the page is open or closed
// USER
//
// field	description
// name	full name of the user
// email	a unique, identifying email address

var Page = db.define('page', {
    title: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        }
    },
    urlTitle: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          isUrl: true,
        }
    },
    content: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true,
        }
    },
    status: {
        type: Sequelize.ENUM('open', 'closed')
    },
    date: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    }
});

var User = db.define('user', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        validate:{
          isEmail: true
        }
});

module.exports = {
  Page: Page,
  User: User,
  db: db
};

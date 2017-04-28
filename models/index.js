var Sequelize = require('sequelize');
var db = new Sequelize('postgres:localhost:5432/wikistack');

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
        type: Sequelize.STRING
    },
    urlTitle: {
        type: Sequelize.STRING
    },
    content: {
        type: Sequelize.TEXT
    },
    status: {
        type: Sequelize.ENUM('open', 'closed')
    }
});

var User = db.define('user', {
    name: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    }
});

module.exports = {
  Page: Page,
  User: User
};

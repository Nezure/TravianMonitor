var lang = require('./lang.json');

var greet = function(name){
    return lang.se.WelcomeUser1 + " " + name + ". " + lang.se.WelcomeUser2 + "!";
}

var sayRole = function(role){
    return lang.se.SayRole + " " + role;
}

module.exports = {
    greet : greet
};
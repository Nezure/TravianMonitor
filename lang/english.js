var lang = require('./lang.json');

var greet = function(name){
    return lang.en.WelcomeUser1 + " " + name + ". " + lang.en.WelcomeUser2 + "!";
}

var sayRole = function(role){
    return lang.en.SayRole + " " + role;
}

module.exports = {
    greet : greet,
    sayRole : sayRole
};
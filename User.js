var lang = require("./lang");

"use strict";
module.exports = class User{
    constructor(id, username, firstname, lastname, language){
        this.id = id;
        this.username = username;
        this.firstname = firstname;
        this.lastname = lastname;
        this.language = language;

        this.ip = "192.168.0.1";
    }
    greet(){
        console.log(lang[this.language].greet(this.username));
    }
}
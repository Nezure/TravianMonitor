var version = process.version;
var uptime = process.uptime();
var startTime = new Date().toString();

var printAppInfo = function(){
    console.log("------------------------");
    console.log("Application startup " + startTime);
    console.log("Node version: " + process.version);
    console.log("Server uptime: " + process.uptime());
    console.log("------------------------");
};

var getAppInfo = function(){
    return {
        version, 
        uptime
    }
};

module.exports = {
    getAppInfo,
    printAppInfo
};
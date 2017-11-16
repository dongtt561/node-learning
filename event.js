/*
* @Author: dongtt
* @Date:   2017-11-02 15:45:37
* @Last Modified by:   dongtt
* @Last Modified time: 2017-11-03 13:52:18
*/
var event = require('events');
EventEmitter = event.EventEmitter;
var emmiter = new EventEmitter();
var users_list = [
    {"name": "test1", "pass": "test_1pas"}
];
var u_id = "test2";
var pwd = "123456";

var _addUser = function() {
    users_list.push({"name": u_id, "pass": pwd});
    console.log("event add user");
    console.log("List users2:");
    console.log(users_list);
}

var _remove = function() {
    console.log('remove listener !');
}

emmiter.on("addUser", _addUser); // listent chanel multi times
emmiter.emit("addUser", u_id, pwd);
emmiter.removeListener("addUser", _addUser);

emmiter.emit("addUser", u_id, pwd);


console.log(emmiter.listenerCount('addUser'));
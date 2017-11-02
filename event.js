/*
* @Author: dongtt
* @Date:   2017-11-02 15:45:37
* @Last Modified by:   dongtt
* @Last Modified time: 2017-11-02 16:45:24
*/
var event = require('events');
var emmiter = new event.EventEmitter();
var users_list = [
	{"name": "test1", "pass": "test_1pas"}
];
var u_id = "test2";
var pwd = "123456";
emmiter.on("addUser", function(user, pass) {
	users_list.push({"name": user, "pass": pass});
	console.log("event add user");
	console.log("List users:");
	console.log(users_list);
});

emmiter.emit("addUser", u_id, pwd);

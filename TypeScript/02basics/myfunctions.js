"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
    // return "hello"
}
addTwo(5);
function getUpper(val) {
    return val.toUpperCase();
}
getUpper("santosh");
function signUpUser(name, email, password) { }
signUpUser("santosh", "santosh37kr@gmail.com", "12345678santosh");
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
loginUser("Santosh", "santosh37kr@gmail.com");
var getHello = function (s) {
    return "";
};
var heros = ["thor", "spiderman", "ironman"];
// const heros = [1, 2, 3]
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
function consoleError(errmsg) {
    console.log(errmsg);
}
function handleError(errmsg) {
    throw new Error(errmsg);
}

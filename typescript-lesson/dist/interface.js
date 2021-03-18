"use strict";
let addFunc;
addFunc = (num1, num2) => {
    return num1 + num2;
};
const nameable = {
    name: 'Quill',
    nickName: 'Quilla'
};
class Developer {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greeting(message) {
        console.log(message);
    }
}
const tmpDeveloper = {
    name: 'Quill',
    age: 38,
    experience: 3,
    greeting(message) {
        console.log(message);
    }
};
const user = tmpDeveloper;

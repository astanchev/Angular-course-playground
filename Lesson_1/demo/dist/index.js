"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("underscore");
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    doSomething(obj) {
        return _.range(0, 10, 1);
    }
    doSomethingElse(obj) {
        return obj;
    }
    sayHello() {
        return `Hello ${this.name}`;
    }
}
class Employee extends User {
    constructor(name, age) {
        super(name, age);
    }
    doDifferent() {
        return this.sayHello() + '\nGoodbye!';
    }
}
const ivan = new User('Ivan', 20);
ivan.doSomething({ name: 'sdsadsa', age: 20, data: [], getInfo() { } });
const myObj = {
    name: 'dssadsa',
    age: 20,
    test: ['', ''],
    data: [],
    getInfo() { }
};
ivan.doSomethingElse(myObj);
ivan.doSomethingElse({ a: 1, b: 2 });
const pesho = new Employee('Pesho', 33);
console.log(pesho.doDifferent());
//# sourceMappingURL=index.js.map
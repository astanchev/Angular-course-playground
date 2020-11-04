import * as _ from 'underscore';

interface IMyObj {
  name: string;
  age: number;
  data: boolean[];
  getInfo(text: string): void;
}

interface IMyObj2 extends IMyObj {
  test: string[]
}

class User {
  constructor(public name: string, public age: number) { }


  doSomething(obj: IMyObj) {
    return _.range(0, 10, 1);
  }

  doSomethingElse<T>(obj: T): T {
    return obj;
  }

  sayHello() {
      return `Hello ${this.name}` ;
  }
}

class Employee extends User {
  constructor(name: string, age: number) {
    super(name, age);
  }

  doDifferent(){
    return this.sayHello() + '\nGoodbye!';
  }
}

const ivan = new User('Ivan', 20);

ivan.doSomething({ name: 'sdsadsa', age: 20, data: [], getInfo(){} });

const myObj: IMyObj2 = {
  name: 'dssadsa',
  age: 20,
  test: ['', ''],
  data: [],
  getInfo(){}
};

ivan.doSomethingElse(myObj);


ivan.doSomethingElse<{ a: number, b: number }>({ a: 1, b: 2 });

const pesho = new Employee('Pesho', 33);

console.log(pesho.doDifferent());
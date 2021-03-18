interface addFunc {
  (num1: number, num2: number): number;
}
let addFunc: addFunc;
addFunc = (num1: number, num2: number) => {
  return num1 + num2;
}

interface Nameable {
  name: string;
  nickName?: string;
}
const nameable: Nameable = {
  name: 'Quill',
  nickName: 'Quilla'
}

interface Human extends Nameable {
  age: number;
  greeting(message: string): void;
}
class Developer implements Human {
  constructor(public name: string, public age: number) {
  }
    greeting(message: string) {
      console.log(message)
  }
}

const tmpDeveloper = {
  name: 'Quill',
  age: 38,
  experience: 3,
  greeting(message: string) {
    console.log(message);
  }
}
const user: Human = tmpDeveloper;
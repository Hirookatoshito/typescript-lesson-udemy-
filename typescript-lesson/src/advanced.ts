interface Enginner {
  name: string;
  role: string;
}
interface Blogger {
  name: string;
  follower: number;
}

interface EnginnerBlogger extends Enginner, Blogger {}
const quill: EnginnerBlogger = {
  name: 'Quill',
  role: 'front-end',
  follower: 1000
}
type NumberBoolean = number | boolean;
type StringNumber = string | number;
type Mix = NumberBoolean & StringNumber;

function toUpperCase(x: string): string;
function toUpperCase(x: number): number;
function toUpperCase(x: string | number): string | number {
  if (typeof x === 'string') {
    return x.toUpperCase();
  }
  return '';
}
interface TmpFunc {
  (x: string): number;
  (x: number) : number;
}
const upperHello: TmpFunc = function (x: string | number) {return 0};
// interface FuncA {
//   (a: number, b: string): number;
//   (a: string, b: number): number;
// }
// interface FuncB {
//   (a: string): number;
// }
// let intersectionFunc: FuncA & FuncB;
// intersectionFunc = function(a: number | string, b?:number | string) {return 0}

interface FuncA {
  (a: number): number;
}
interface FuncB {
  (a: string): string;
}
let unionFunc: FuncA | FuncB;
unionFunc = function (a: string) {return 'hi'}

type NomadWorker = Enginner | Blogger;
function describeProfile(nomadWorker: NomadWorker) {
  console.log(nomadWorker.name);
  if ('role' in nomadWorker) {
    console.log(nomadWorker.role)
  }
  if ('follower' in nomadWorker) {
    console.log(nomadWorker.follower)
  }
}
class Dog {
  kind: 'dog' = 'dog';
  speak() {
    console.log('bow-bow')
  }
}
class Bird {
  kind: 'bird' = 'bird';
  speak() {
    console.log('tweet-tweet')
  }
  fly () {
    console.log('flutter')
  }
}

type Pet = Dog | Bird;
function havePet(pet: Pet) {
  pet.speak();
  switch (pet.kind) {
    case 'bird':
      pet.fly();
  }
  if (pet instanceof Bird) {
    pet.fly();
  }
}
havePet(new Bird());

const input = document.getElementById('input') as HTMLInputElement;
input.value ='initial input value';

interface Desiner {
  name: string;
  [index: string]: string;
}
const desiner: Desiner = {
  name: 'Quill',
  role: 'web'
}
interface DownloadedData {
  id: number;
  user?: {
    name?: {
      first: string;
      last: string;
    }
  }
}
const downloadedData: DownloadedData = {
  id: 1
}
console.log(downloadedData.user?.name?.first);
const userData = downloadedData.user ?? 'no-user';
type id = DownloadedData["user"];
enum Color {
  RED,
  BLUE
}
class AdvancedPerson {
  name: string = 'Peter'
  age: number = 35
}
class AdvancedCar {
  name: string = 'Prius'
  age: number = 5
}
let target = new AdvancedPerson()
let source = new AdvancedCar()
target = source;

function advancedFn(...args: [number, string, boolean]) {

}
advancedFn(0, 'hi', true)
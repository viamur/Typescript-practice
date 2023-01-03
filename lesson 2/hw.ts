// Задайте правильные ts типы, для классических js;
let age: number;
age = 50;
let nameUser: string;
nameUser = 'Max';
let toggle: boolean;
toggle = true;
let empty: null;
empty = null;
let notInitialize: undefined;
notInitialize = undefined;
let callback: (a: number) => number;
callback = a => {
  return 100 + a;
};

// Задавайте тип для переменной в которую можно сохранить любое значение.
let anything: any;
anything = -20;
anything = 'Text';
anything = {};

// Исправьте код с переменной unknown, чтобы в него можно было сохранить переменную с текстом.
let some: unknown;
some = 'Text';

let str: string;

if (typeof some === 'string') {
  str = some;
}

// Сделайте неизменяемый массив со строго описанными типами. Массив для примера.
let person: [string, number];
person = ['Max', 21];

// Опишите enum условие следующее, он должен отображать статус загрузки. Загружается (LOADING) и загружена (READY).
enum Status {
  LOADING,
  READY,
}
const page = {
  load: Status.LOADING,
};

if (page.load === Status.LOADING) {
  console.log('a');
}
if (page.load === Status.READY) {
  console.log('b');
}
// Сделайте переменную, которая может принимать или строку или число.
let a: string | number;

// Сделайте переменную, которая может принимать только одно значение из двух 'enable' или 'disable'
let b: 'enable' | 'disable';

// Укажите типы для следующих функций
function showMessage(message: string): void {
  console.log(message);
}

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): never {
  throw new Error('Error');
}

// Создайте свой тип данных на основе имеющихся данных.
type pageType = {
  title: string;
  likes: number;
  accounts: Array<string>;
  status: 'open' | 'close';
  details?: {
    createAt: string; // Date
    updateAt: string; // Date
  };
};

const page1: pageType = {
  title: 'The awesome page',
  likes: 100,
  accounts: ['Max', 'Anton', 'Nikita'],
  status: 'open',
  details: {
    createAt: '2021-01-01',
    updateAt: '2021-05-01',
  },
};

const page2: pageType = {
  title: 'Python or Js',
  likes: 5,
  accounts: ['Alex'],
  status: 'close',
};

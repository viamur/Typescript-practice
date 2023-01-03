// let num: number;
// let str: string;
// let bool: boolean;
// let empty: null;
// let notParam: undefined;

// num = 10;
// bool = true;
// str = 'f';
// empty = null;
// notParam = undefined;

// function foo (num: number, str: string, bool: boolean) {}

// let arrString: string[];
// let arrString: number[];
// let arrString: any[];
// let arrString: Array<number> = [1, 3]
// let arrObj: { name: string }[];

// arrObj = [{ name: '2' }];

// arrString = [1, 3, 't'];
// arrString = [1, 3, 'r'];
// arrString = ['text', 1];

// const obj: object = {};
// const obj: {} = {};
// const obj: { name: string } = { name: "Alex" };

// const obj: { name?: string } = {};
// obj.name = 'Serhii';

// const data: {
//   id: number;
//   price: number;
//   permission: string[];
//   details: {
//     title: string;
//     description?: string;
//   };
// } = {
//   id: 1,
//   price: 10.99,
//   permission: ['read', 'write'],
//   details: {
//     title: 'New product',
//     description: 'This is awesome product!',
//   },
// };

// declare const maybe: unknown;

// if( maybe === true)
// {
//     const bool: boolean = maybe;
// }
// if (typeof maybe === "string") {
//     const aString: string = maybe;
//  }

// let some: any;

// some = 10;
// some = {};
// some = 'str';

// let num: number;
// num = some;

// let some: unknown;
// some = 10;

// let num: number;
// // num = some; //nowork

// if (typeof some === 'number') {
//     num = some; // так будет ок
// }

//TUPLE - это не изм массив
// let fixed: [string, number];

// fixed = ['text', 2];  // если добавить через push то не отсл

// ENUM
// enum Role {
//   ADMIN,
//   USER,
// }

// const person = {
//   role: Role.ADMIN,
// };

// if (person.role === Role.ADMIN) {
//   console.log(Role.ADMIN); // 0
// }

//Union Type
// let union: string | number;

// union = 4;
// union = 'df';

// function combine(param1: number | string, param2: number | string) {
//   if (typeof param1 === 'number' && typeof param2 === 'number') {
//     return param1 + param2;
//   } else {
//     return param1.toString() + param2.toString();
//   }
// }

// Literal Type
// let literal: 'first' | 'second';

// literal = 'first'; //могут быть только определеные значения

// function greeting(action: 'hello' | 'bye') {
//   if (action === 'hello') {
//     console.log('Hello user');
//   } else {
//     console.log('Bye user');
//   }
// }

//Типы для методов и функций
//Return Type

// function returnResult(num: '5'): number {
//   //указываем какой типо должен нам вернутся
//   return +num;
// }

//Void
//Это когда функция ничего не возвращает.

// function print():void {
//     console.log('Print some text');
//     // return 'tee' //будет ошибка так как ничего не должно возвращатся
// }

// Never
//Это когда функция никогда не заканчивается и ничего не возвращает

// function generateError(message: string, status: number): never {
//   throw { message, status };
// }
// generateError('a', 5);

// Function Type
// let callback: (num: number) => void;

// callback = num => {
//   console.log(num);
// };

// function calc(
//   param1: number,
//   param2: number,
//   callback: (num1: number, num2: number) => number
// ): void {
//   console.log('result:', callback(param1, param2));
// }

// calc(1, 2, (num1, num2) => num1 + num2);

//Custom Types
// type DataBaseDate = {
//     id: number;
//     price: number;
//     permisson: string[];
//     details: {
//         title: string,
//         descriptions?: string;
//     }
// }

// const data: DataBaseDate = {
//     id: 1,
//     price: 10,
//     permisson: ['df', 'fdf'],
//     details: {
//         title: 'Hel',
//         descriptions: 'df'
//     }
// }

// export type {
//     DataBaseDate,
// }

// Опциональные параметры и свойства
// function optional(num?: number): void {}
// optional();

// type CustomType = {
//   name: string;
//   sex?: 'man' | 'woman';
// };

// const person: CustomType = {
//   name: 'on',
// };

// person.sex = 'man';

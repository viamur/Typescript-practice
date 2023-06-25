function getPromise (): Promise<Array<string | number>> {
    return new Promise((resolve) => {
        resolve(['Text', 50]);
    });
}

getPromise ()
    .then((data) => {
        console.log(data);
    });

type AllType = {
    name: string;
    position: number;
    color: string;
    weight: number
}

function compare (top: Pick<AllType, 'name' | 'color'>, bottom: Pick<AllType, 'position' | 'weight'>): AllType {
    return {
        name: top.name,
        color: top.color,
        position: bottom.position,
        weight: bottom.weight,
    }
}

function merge<T extends object, U extends object> (objA: T, objB: U) {
    return Object.assign(objA, objB);
}

function getValue<T extends object, U extends keyof T> (objA: T, objB: U) {
    return objA[objB];
}


class Component<T> {
    constructor (public props:T) {

    }
}

class Page extends Component<{title: string}> {
    pageInfo () {
        console.log(this.props.title);
    }
}

interface ILength {
    length: number;
}

function getLength<T extends ILength>(str:T) {
    return str.length;
}

getLength('text');

interface IPerson {
    name: string;
    age: number;
}

function createPerson (name: string): IPerson {
    const person: Partial<IPerson> = {};

    person.name = name;
    person.age = 20;

    return person as IPerson;
}

const arr: Readonly<number[]> = [1, 2, 3, 4, 5];

// arr.push(6);

const obj: Readonly<{name: string}> = {
    name: 'Max'
}

// obj.name = 'Serhii'

interface Person {
    name: string;
    [x: string]: string;
}

const user: Person = {
    name: 'Max',
    age: '20',
}

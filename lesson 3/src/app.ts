let a: string[];

a = ['a', 'b', 'c'];

function b(c: string): void {
  a.map(el => console.log(el));
  console.log(c);
}

b('fff');

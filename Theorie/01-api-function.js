'use strict';

globalThis.name = 'Romain';

const contact = {
  name: 'Romain',
}

function hello(p1, p2) {
  // par défaut this === l'objet global
  // sauf en mode strict où this === undefined
  // this -> pseudo variable (déclarée automatiquement au moment de l'appel)
  console.log(`Hello ${p1}, ${p2}, my name is ${this.name}`);
}

// hello('Eric', 'Jean');

// hello.call
// hello.apply
// hello.bind

hello.call(contact, 'Eric', 'Jean');
hello.apply(contact, ['Eric', 'Jean']);
hello.call(contact, ...['Eric', 'Jean']); // SPREAD Operator (ES2015)

const helloContact = hello.bind(contact); // ES5
helloContact('Eric', 'Jean');

// function bind(fn, thisToApply) {
//   return function() {
//     fn.apply(thisToApply, arguments)
//   }
// }

// const helloContact = bind(hello, contact);
// helloContact('Eric', 'Jean');

const fs = require('fs');

// 2 lectures en parallèles
// mais aléatoires
// fs.promises
//   .readFile('a.txt')
//   .then((data) => fs.promises.appendFile('c.txt', data))
//   .then(() => console.log('a written'));

// fs.promises
//   .readFile('b.txt')
//   .then((data) => fs.promises.appendFile('c.txt', data))
//   .then(() => console.log('b written'));

// on attends d'avoir terminé la lecture de a.txt pour démarrer la lecture b.txt
// (async function() {
//   const dataA = await fs.promises.readFile('a.txt');
//   const dataB = await fs.promises.readFile('b.txt');

//   await fs.promises.appendFile('c.txt', dataA);
//   await fs.promises.appendFile('c.txt', dataB);
// })();

// démarre la lecture de a.txt et b.txt en même temps
// mais j'écris dans c.txt les fichiers dans l'ordre
(async function() {
  const datas = await Promise.all([
    fs.promises.readFile('a.txt'),
    fs.promises.readFile('b.txt'),
  ]);

  await fs.promises.appendFile('c.txt', datas[0]);
  await fs.promises.appendFile('c.txt', datas[1]);
})();

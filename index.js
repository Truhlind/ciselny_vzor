const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Zadej číslo: ', (num) => {
  for(let i = num.length; i >= 1; i--) {
    let line = '';
    for (let j = 0; j < num.length - i; j++) {
      line += ' ';
    }
    line += num.slice(0, i);
    console.log(line);
  }
  rl.close();
});

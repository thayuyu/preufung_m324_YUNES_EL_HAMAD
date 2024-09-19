import chalk from 'chalk';

console.log(
  chalk.blue(
    'it works',
  ),
);

const myUnusedVariable = 20;

if (
  true ===
  true
) {
  console.log(
    myUnusedVariable,
  );
}


export function calculate(a, b, operation){
if (operation === 'plus'){
    return a + b + 1;
}
else if (operation === 'minus'){
    return a - b + 1;
}
else {
    throw new Error('Wrong operator');
}
}


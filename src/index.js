let height = +prompt('Введите ваше число:');
let symbolik = prompt('Введите символ из которого будет построена ваша елочка!')

function xmasTree(pyramidHeight, symbol) {

console.log(symbol);

  if(symbol.length === 1) {
    let xmas = '';

    for (let i = 1; i <= pyramidHeight; i++) {
      const spaces = ' '.repeat(pyramidHeight - i);
      const odd = 1;
      xmas += spaces + symbol.repeat(i + i - odd) + '\n';
    }
    
    return xmas;
  }else {
    throw new Error('Больше одного символа!');
  }
}

// Check your code
console.log(xmasTree(height, symbolik));

// module.exports = { xmasTree };
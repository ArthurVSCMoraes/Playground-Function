// Desafio 1 ok
function compareTrue(param1, param2) {
  if (param1 === true && param2 === true) {
    return true;
  } else {
    return false
  }
}

// Desafio 2 ok
function calcArea(base, height) {
  return base * height / 2
}

// Desafio 3 ok
function splitSentence(string) {
  return string.split(" ")
}

// Desafio 4 ok
function concatName(arrays) {

  return arrays[arrays.length - 1] + ', ' + arrays[0]
}
// Desafio 5 ok
function footballPoints(wins, ties) {

  const points = (wins * 3) + (ties);

  return points;
};

// Desafio 6 ok
function highestCount(numero) {
  let numeroRepetido = 0;
  let maiorNumero = numero[0]
  for (let index in numero) {
    if (numero[index] > maiorNumero) {
      maiorNumero = numero[index];
    }
  }
  for (let index2 in numero) {
    if (maiorNumero === numero[index2]) {
      numeroRepetido += 1;
    }
  }
  return numeroRepetido;
}

// Desafio 7 ok
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = Math.abs(cat1 - mouse)
  let distanceCat2 = Math.abs(cat2 - mouse)

  if (distanceCat1 === distanceCat2) {
    return "os gatos trombam e o rato foge"
  } else if (distanceCat2 > distanceCat1) {
    return 'cat1'
  } else {
    return 'cat2'
  }
}

// Desafio 8 ok
function fizzBuzz(numeros) {
  let resultado = [];
  for (let index in numeros) {
    if (numeros[index] % 3 === 0 && numeros[index] % 5 === 0) {
      resultado.push('fizzBuzz')
    } else if (numeros[index] % 3 === 0) {
      resultado.push('fizz')
    } else if (numeros[index] % 5 === 0) {
      resultado.push('buzz')
    } else {
      resultado.push('bug!')
    }
  }
  return resultado;
}
// Desafio 9
function encode(vogaisString) {
  let novaString = ' '
  for (let index in vogaisString) {
    switch (vogaisString[index]) {
      case 'a':
        novaString += '1';
        break;
      case 'e':
        novaString += '2';
        break;
      case 'i':
        novaString += '3';
        break;
      case 'o':
        novaString += '4';
        break;
      case 'u':
        novaString += '5';
        break;
      default: novaString += vogaisString[index]
        break;
    }
    return novaString
  }
}
function decode(numero) {
  let novoNumro = ' '
  for (let index in numero) {
    switch (numero[index]) {
      case 'a':
        novoNumro += '1';
        break;
      case 'e':
        novoNumro += '2';
        break;
      case 'i':
        novoNumro += '3';
        break;
      case 'o':
        novoNumro += '4';
        break;
      case 'u':
        novoNumro += '5';
        break;
      default: novoNumro += vogaisString[index]
        break;
    }
    return novoNumro
  }
}


// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
function upperCase(string) {
  return string.toUpperCase();
}
console.log('Uppercase: sgfjk -> ' + upperCase('sgfjk'));
console.log(['sentence', 'array', 'seabiscuit', 'english'].map(upperCase));

function withinArray(array, comparator) {
  if (array.indexOf(comparator) !== -1) {
    return true;
  } else {
    return false;
  }
}
console.log("Within Array: 'joseph' ['none', 'happiness', 'truth'] -> " + withinArray(['none', 'happiness', 'truth'], 'joseph'));

function isEven(num) {
  if (num % 2 == 0) {
    return true;
  } else {
    return false;
  }
}
console.log("Is Even: 8 -> " + isEven(8));
console.log([1,2,3,4,5,6,7,8,9].map(isEven));

function isOdd(num) {
  if (num % 2 == 0) {
    return false;
  } else {
    return true;
  }
}
console.log("Is Odd: 8 -> " + isEven(8));
console.log([1,2,3,4,5,6,7,8,9].map(isOdd));

function larger(a,b) {
  return (a>b) ? true : false;
}
console.log("Larger: 7>6 -> " + larger(7,6));

function smaller(a,b) {
  return (a<b) ? true : false;
}
console.log("Smaller: 7<6 -> " + smaller(7,6));

function abrahamLincoln(string) {
  if (upperCase(string) === 'ABRAHAM LINCOLN') {
    return true;
  } else {
    return false;
  }
}
console.log("Abraham lincoln: abrAhAm LINcoLN -> " + abrahamLincoln('abrAhAm LINcoLN'));
console.log(['sentence', 'array', 'seabiscuit', 'abraham lincoln'].map(abrahamLincoln));

function capitalize(string) {
  return upperCase(string.substring(0, 1)).concat(string.substring(1));
}
console.log("Capitalize: capitalize me captain! -> " + capitalize('capitalize me captain!'));
console.log(['sentence', 'array', 'seabiscuit', 'english'].map(capitalize));

function seperate(string, seperator) {
  var out = "";
  for (var i = 0; i < string.length; i++) {
    if (string[i] === seperator) {
      out += " ";
    } else {
      out += string[i];
    }
  }
  return out;
}
console.log("Seperate: james;is;casual ';' -> " + seperate('james;is;casual', ';'));

function replaceString(string, findStr, replaceStr) {
  return string.replace(findStr, replaceStr);
}
console.log("Replace String: Joseph is funny and a wonderful man 'Joseph' 'James' -> " + replaceString('Joseph is funny and a wonderful man', 'Joseph', 'James'));

function findBiggestFraction(a, b) {
    var result;
    a>b ? result = ["firstFraction", a] : result = ["secondFraction", b];
    return result; 
}

var firstFraction = 3/4;
var secondFraction = 5/7;

var fractionResult = findBiggestFraction(firstFraction,secondFraction);

console.log("O Resultado da primeiro fração é: ", firstFraction);
console.log("O Resultado da segunda fração é: ", secondFraction);
console.log("A maior fração é a: "+ fractionResult[0]+"com valor: "+fractionResult);

// escreva uma função que usa 2 números e retorna o maior entre eles
function maior(num1, num2) {
    if (num1 > num2) {
        return console.log(num1)
    } else {
        return console.log(num2)
    }
}
maior(17, 17)


// em ternario
function max(num1, num2) {
    return num1 > num2 ? num1 : num2;
}
console.log(max(10, 15))

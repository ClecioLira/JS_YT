// divisivel por 3 = Fizz
// divisivel por 5 = Buzz
// divisivel por 3 e 5 = FizzBuzz
// não divisivel por 3 e 5 = entrada
// não é um numero = "Não é um número!"

const resultado = fizzBuzz(15)
console.log(resultado)

function fizzBuzz(entrada) {
    if (typeof entrada !== 'number') {
        return "Não é um número!"
    }

    if (entrada % 3 === 0 && entrada % 5 === 0) {
        return "FizzBuzz"
    } else if (entrada % 3 === 0) {
        return "Fizz"
    } else if (entrada % 5 === 0) {
        return "Buzz"
    }
    return entrada
}
function generateSentence(desc, arr) {
    let baseString = `As ${arr.length} ${desc} são: `
    const lastIndex = arr.length - 1
    const penIndex = arr.length - 2
    for (let i = 0; i < arr.length; i++) {
        if (i === lastIndex) {
            baseString += arr[i] + "."
        } else if (i === penIndex) {
            baseString += arr[i] + " e "
        } else {
            baseString += arr[i] + ", "
        }
    }
    return baseString
}
const sentence = generateSentence('melhores frutas', ['maça', 'banana', 'uva'])
console.log(sentence)
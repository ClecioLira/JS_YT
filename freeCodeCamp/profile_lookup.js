var contacts = [
    {
        'firstName': 'Akira',
        'lastName': 'Laine',
        'number': '0523564871',
        'likes': ['pizza', 'coding', 'brownie points']
    },
    {
        'firstName': 'Harry',
        'lastName': 'Potter',
        'number': '1518232222',
        'likes': ['Hogwarts', 'Magic', 'Hagrid']
    },
    {
        'firstName': 'Sherlock',
        'lastName': 'Holmes',
        'number': '33548484871',
        'likes': ['Intriguing cases', 'Violin']
    },
    {
        'firstName': 'Kristian',
        'lastName': 'Vos',
        'number': 'uknown',
        'likes': ['Javascript', 'Gaming', 'Foxes']
    }
]

function lookUpProfile(name, prop) {
    for (let i = 0; i < contacts.length; i++) {
        if (contacts[i].firstName === name) {
            return contacts[i][prop]
        }
    }
    return 'Nome ou propriedade não encontrada.'
}

let data = lookUpProfile('Harry', 'number')
console.log(data)
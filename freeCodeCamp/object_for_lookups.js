function phoneticLookup(valor) {
    let result = '';

    let lookup = {
        'alpha': 'Adams',
        'bravo': 'Bostons',
        'charlie': 'Chicago',
        'delta': 'Denver',
        'echo': 'Easy',
        'foxtrot': 'Frank'
    };

    result = lookup[valor];

    return result;
}

console.log(phoneticLookup('charlie'))
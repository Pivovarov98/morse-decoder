const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let arr = []
    let i = 0
    while (i < expr.length) {
        arr.push(expr.slice(i, (i + 10)))
        i += 10
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '**********') {
            arr.splice(i, 1, ' ')
        } else {
            let str = arr[i].replaceAll('10', '.').replaceAll('11', '-').replaceAll('0', '')
            arr.splice(i, 1, MORSE_TABLE[str])
        }
    }

    return arr.join('')
}

module.exports = {
    decode
}
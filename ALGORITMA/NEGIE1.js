function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function reverseAlphabetKeepNumber(input) {
    const letters = input.match(/[A-Za-z]+/g)?.[0] || '';
    const numbers = input.match(/\d+/g)?.[0] || '';

    const shuffledLetters = shuffleArray(letters.split('')).join('');

    return shuffledLetters + numbers;
}

const input = "NEGIE1";
const result = reverseAlphabetKeepNumber(input);

console.log(result);

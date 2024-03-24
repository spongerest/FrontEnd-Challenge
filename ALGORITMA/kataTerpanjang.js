function longest(sentence) {
    const words = sentence.split(' ');

    const longestWord = words.reduce((longest, currentWord) => {
        return currentWord.length > longest.length ? currentWord : longest;
    }, "");

    return longestWord;
}

const sentence = "Mengembangkan aplikasi dengan JavaScript memberikan kepuasan tersendiri";
const result = longest(sentence);

console.log(`${result}: ${result.length} characters`);

function countOccurrences(input, query) {
    const frequency = input.reduce((acc, curr) => {
        acc[curr] = (acc[curr] || 0) + 1;
        return acc;
    }, {});

    const result = query.map(q => frequency[q] || 0);

    return result;
}

const INPUT = ['apple', 'banana', 'orange', 'apple', 'mango', 'banana'];
const QUERY = ['apple', 'mango', 'grape'];


const output = countOccurrences(INPUT, QUERY);
console.log(output);

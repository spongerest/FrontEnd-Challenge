function diagonalDifference(matrix) {
    let diagonalPrimary = 0;
    let diagonalSecondary = 0;

    for (let i = 0; i < matrix.length; i++) {
        diagonalPrimary += matrix[i][i];
        diagonalSecondary += matrix[i][matrix.length - 1 - i];
    }

    return Math.abs(diagonalPrimary - diagonalSecondary);
}

const matrix = [
    [3, 4, 2],
    [5, 6, 7],
    [8, 1, 9]
];
const result = diagonalDifference(matrix);
console.log(result);

export const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => parseFloat((a * b).toFixed(2)),
    divide: (a, b) => (b === 0 && a !== 0) ? Infinity : parseFloat((a / b).toFixed(2))
};
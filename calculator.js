const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => (a * b).toFixed(2),
    divide: (a, b) => (b === 0 && a !== 0) ? Infinity : (a / b).toFixed(2), 
};
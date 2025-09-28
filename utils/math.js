function plus(a, b) {
    return a + b;
}
function minus(a, b) {
    return a - b;
}
function times(a, b) {
    return a * b;
}
function divide(a, b) {
    if (b === 0) {
        return "Error: Division by zero";
    }
    return a / b;
}
module.exports = { plus, minus, times, divide };


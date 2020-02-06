/**
 * The function returns the nth value of
 * the Fibonacci sequence
 *
 * @param {number} n (n >= 0)
 * @returns {number} Fibonacci number or 0 if any arguments are not proper
 */
function fibonacci(n) {
    let nThFibonacci;
    /*
     * Your task is to calculate the nth value of the
     * Fibonacci sequence.
     * https://en.wikipedia.org/wiki/Fibonacci_number
     * Store the value in the nThFibonacci variable.
     * Also take into consideration the documentation of the function!
     */
    // PLACE YOUR CODE BETWEEN THIS...

    let previousToPreviousValue = 0;
    let previousValue = 1;
    let currentValue;
    if(n == 0)
        nThFibonacci = 0;
    else if(n == 1)
        nThFibonacci = 1;
    else{
        for(let i = 2;i <= n;i++){
            currentValue = previousValue + previousToPreviousValue;
            previousValue = currentValue;
            previousToPreviousValue = previousValue;
        }
        nThFibonacci = currentValue;
    }

    // ...AND THIS COMMENT LINE!
    return nThFibonacci;
}
module.exports = fibonacci;
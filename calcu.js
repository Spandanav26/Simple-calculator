// Import the readline module to accept user input
const readline = require('readline');

// Create an interface to read input from the command line
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to calculate the sum
function calculateSum(num1, num2) {
    return num1 + num2;
}

// Function to calculate the product
function calculateProduct(num1, num2) {
    return num1 * num2;
}

// Function to calculate the difference
function calculateDifference(num1, num2) {
    return num1 - num2;
}

// Function to calculate the remainder (modulus)
function calculateRemainder(num1, num2) {
    return num1 % num2;
}

// Prompt the user for input and perform operations
rl.question("Enter the first number: ", (input1) => {
    const number1 = parseFloat(input1);

    rl.question("Enter the second number: ", (input2) => {
        const number2 = parseFloat(input2);

        // Display the results
        console.log("Sum: " + calculateSum(number1, number2));
        console.log("Product: " + calculateProduct(number1, number2));
        console.log("Difference: " + calculateDifference(number1, number2));
        console.log("Remainder: " + calculateRemainder(number1, number2));

        // Close the readline interface
        rl.close();
    });
});

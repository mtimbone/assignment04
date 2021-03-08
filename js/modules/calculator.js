// ADD A PRIVATE FUNCTION CALLED CALCULATE

// const add = (x, y) => {
//     return x | y;
// };

// ADD FOUR PUBLIC FUNCTIONS BELOW

let message = "The sum of two numers is:";

// export
    const add = (x, y) => {
    let sum = x + y;
    return `${message} ${sum}`;
};

// export
    const subtract = (x, y) => {
    let sum = x - y;
    return `${message} ${sum}`;
};

// export
    const mulitply = (x, y) => {
    let sum = x * y;
    return `${message} ${sum}`;
};

// export
    const divide = (x, y) => {
    let sum = x / y;
    return `${message} ${sum}`;
};

const x = parseFloat(prompt('Enter first number: '));

const y = parseFloat(prompt('Enter second number: '));

const operator = prompt('Enter operator ( either +, -, * or / ): ');


let result;

console.log(`${message} ${sum}`);


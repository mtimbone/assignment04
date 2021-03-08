//STEP 1 

function halfNumber(num) {
    let half = num / 2;
    document.write('half of ' + num + ' is ' + half);
    return half;
}
halfNumber(5)

//STEP 2  

function squareNumber(num) {
    let squared = num * num;
    document.write('The result of squaring the number ' + num + ' is ' + squared);
    return squared;
}
squareNumber(3);


//STEP 3 

function percentOf(num1, num2) {
    let percent = (num1 / num2) * 100;
    document.write(num1 + ' is ' + percent + '% of ' + num2);
    return percent;
}

percentOf(2, 4);


//STEP 4 

function findModulus(num1, num2) {
    let module = (num2 % num1);
    document.write(module + "is the modulus of" + num1 + "and" + num2);
    return module;
}
findModulus(4, 10);



//STEP 5. 


var i, base;
function calculate(numbers) {
    base = Number(numbers);
    for (i = 1; i < arguments.length; i += 1) {
        base += Number(arguments[i]);
    }
    console.log(String(base));
}

prompt('list a set of numbers followed delimited by commas')

calculate(2, 2, 10);
calculate(2, 3);


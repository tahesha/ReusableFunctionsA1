//Sum of Array:
function sumArray(numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}



//Average of Array:
function averageArray(numbers) {
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
}



//Longest String in Array:
function longestString(strings) {
    return strings.reduce((longest, str) => str.length > longest.length ? str : longest, "");
}



//Strings Longer Than Given Number:
function stringsLongerThan(strings, length) {
    return strings.filter(str => str.length > length);
}



//Print Numbers Between 1 and n Using Recursion:
function printNumbers(n) {
    if (n > 0) {
        printNumbers(n - 1);
        console.log(n);
    }
}



/*These functions are designed to be descriptive, taking clear inputs and providing clear outputs. Each function name reflects what it does, making it easier for other programmers to understand the purpose.*/
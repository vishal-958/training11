function sumOfDigits(number) {
    return number.toString()
                 .split('')
                 .map(Number)
                 .reduce((sum, digit) => sum + digit, 0);
}
console.log(sumOfDigits(96472));
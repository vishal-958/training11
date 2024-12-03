function PositiveNumbers(arr) {
    let positiveNumbers = [];
    for (let num of arr) {
        if (num > 0) {
            positiveNumbers.push(num);
        }
    }
    return positiveNumbers;
}
console.log(PositiveNumbers([-14, 4, 5, -2, 76]));
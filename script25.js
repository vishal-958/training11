function sumCommaString(str) {
    return str.split(',').map(Number).reduce((sum, num) => sum + num, 0);
}
console.log(sumCommaString("1.5, 2, 44, 66, 12, 90"));
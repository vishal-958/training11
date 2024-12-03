function findMissingNumbers(arr) {
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const allNumbers = Array.from({ length: max - min + 1 }, (_, i) => i + min);
    const missingNumbers = allNumbers.filter(num => !arr.includes(num));
    return missingNumbers;
}

// Example usage
console.log(findMissingNumbers([68, 71, 69, 73]));
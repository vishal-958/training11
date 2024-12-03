function addSpecialCharacter(str) {
    return str.split('').map((char, index, arr) => {
        if (char === 'c' && arr[index + 1] === 'c') {
            return char + '@';
        }
        return char;
    }).join('');
}

// Example usage
console.log(addSpecialCharacter("cat in the bag"));
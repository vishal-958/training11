function interChange(arr, index) {
    const i = index - 1; 
    if (i >= 0 && i < arr.length) {
        
        if (i === arr.length - 1) {
            [arr[i], arr[0]] = [arr[0], arr[i]];
        } else {

            [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        }
    }
    return arr;
}
console.log(interChange([10, 20, 30, 40, 50], 2));
console.log(interChange([10, 20, 30, 40, 50], 5));
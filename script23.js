function findLargest(arr, n) {
    const sortedArr = [...arr].sort((a, b) => b - a);
    return sortedArr[n - 1];  
}
console.log(findLargest([3, 4, 5, 6, 88], 2));  
console.log(findLargest([3, 4, 5, 6, 88], 4));
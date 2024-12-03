function mergeAndSortArrays(arr1, arr2) {
    return [...arr1, ...arr2].sort((a, b) => a - b);
}
const ar1 = [1, 4, 6];
const ar2 = [2, 5, 3];
console.log(mergeAndSortArrays(ar1, ar2));
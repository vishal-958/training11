function replaceNumbers(str, replacementChar) {
    return str.replace(/\d/g, replacementChar);
}
console.log(replaceNumbers("arun@123", "d")); 
function addSuffixOrPrefix(name, text, type) {
    const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);

    if (type === 'prefix') {
        return `${text.charAt(0).toUpperCase() + text.slice(1)} ${capitalizedName}`;
    } else if (type === 'suffix') {
        return `${capitalizedName} ${text.charAt(0).toUpperCase() + text.slice(1)}`;
    } else {
        return 'Invalid type';
    }
}

console.log(addSuffixOrPrefix("arun", "mr", "prefix")); // Outputs: "Mr Arun"
console.log(addSuffixOrPrefix("charles", "jr", "suffix")); // Outputs: "Charles Jr"

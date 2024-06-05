function transformString(input) {
    const len = input.length;

    if (len % 15 === 0) {
        return input.split('').reverse().join('').split('').map(char => char.charCodeAt(0)).join(' ');
    }
    if (len % 3 === 0) {
        return input.split('').reverse().join('');
    }
    if (len % 5 === 0) {
        return input.split('').map(char => char.charCodeAt(0)).join(' ');
    }
    return input;
}

// Test examples
console.log(transformString("Hamburger"));        // the result will be : "regrubmaH"
console.log(transformString("Pizza"));            // the result will be : "80 105 122 122 97"
console.log(transformString("Chocolate Chip Cookie")); // the result will be : "eikooCpihCetalocohC"
console.log(transformString("Muffin"));           // the result will be : "niffuM" (length 6, divisible by 3)
console.log(transformString("Brownie"));          // the result will be : "66 114 111 119 110 105 101" (length 7, not divisible by 3 or 5)

const doMath = (x, y, z) => {
    const sum = x + y + z;
    const mult = x * y * z;
    const result = sum + mult;

    return result
}


const result = doMath(3, 4, 6);

console.log(result);

// Difference between arrow function and Regular function
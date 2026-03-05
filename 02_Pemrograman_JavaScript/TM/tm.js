function fizzBuzz(arr) {
    if (!Array.isArray(arr)) {
        return "Input tidak valid";
    }
    let hasil = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 14 === 0) {
            hasil.push("FizzBuzz");
        } else if (arr[i] % 2 === 0) {
            hasil.push("Fizz");
        } else if (arr[i] % 7 === 0) {
            hasil.push("Buzz");
        } else {
            hasil.push(arr[i]);
        }
    }
    return hasil.join(" ");
}
module.exports = fizzBuzz;
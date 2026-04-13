function toNumberArray(number) {
    let tempArray;
    if (typeof number === "string") {
        tempArray = number.split(",");
    } else if (Array.isArray(number)) {
        tempArray = number;
    } else {
        throw new TypeError("Input harus berupa string atau array");
    }
    return tempArray.map(item => {
        const trimmed = String(item).trim();
        return Number(trimmed);
    })
        .filter(num => {
            return !isNaN(num) && typeof num === "number";
        })
}

console.log(toNumberArray("1, 2")) // [1, 2]
console.log(toNumberArray(["1", "2"])) // [1, 2]
console.log(toNumberArray(" 11,55,33   ")) // [11, 55, 33]
console.log(toNumberArray(["0.2", "-11", "abc23"])) // [0.2, -11]


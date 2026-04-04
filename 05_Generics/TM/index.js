

// Tambah JSDoc di sini
/**
 * @param {number} value
 * @returns {string|number}
 * @throws {Error}
 */


function zzzzOrNum(value) {
    // Ubah kode di sini
    if (typeof value !== "number") {
        throw new Error("Input harus berupa angka");
    }

    if (value % 3 === 0 && value % 5 === 0) {
        return "FizzBuzz";
    } else if (value % 3 === 0) {
        return "Fizz";
    } else if (value % 5 === 0) {
        return "Buzz";
    } else {
        return value;
    }

}

// Tambah JSDOC di sini
/**
 * @param {number[]} sequence
 * @returns {(string|number)[]}
 * @throws {Error}
 */


function fizzBuzz(sequence) {
    // Ubah kode di sini

    if (!Array.isArray(sequence)) {
        throw new Error("Input harus berupa array");
    }
    const newSequence = sequence.map((e) => zzzzOrNum(e));

    return newSequence;
}

module.exports = {
    fizzBuzz: fizzBuzz,
    zzzzOrNum: zzzzOrNum,
};
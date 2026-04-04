/**
 * @param {String} input
 * @returns {String}
 */
function fizzBuzz(input) {
    const deretLarik = input.split(" ");
    /** @type {String} */
    let hasil = "";

    for (const d of deretLarik) {
        const bil = +d;
        let fz = "";

        if (bil % 3 === 0) {
            fz += "Fizz";
        }
        if (bil % 5 === 0) {
            fz += "Buzz";
        }
        if (hasil != "") {
            hasil += " ";
        }

        if (fz != "") {
            hasil += fz;
            continue;
        }
        hasil += bil;
    }

    return hasil;
}

console.log(fizzBuzz("123 35 1 24 15 15 66 25 1 2"));
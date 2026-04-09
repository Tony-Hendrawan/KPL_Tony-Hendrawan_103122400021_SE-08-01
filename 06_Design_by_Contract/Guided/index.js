function divide(a, b) {
    //prekondisi
    if (typeof a !== 'number' && typeof b !== 'number') {
        throw new TypeError("Salah tipe data. Harus bilangan bulat.");
    }

    if (b === 0) {
        throw new Error("Tidak dibagi dengan nol.");
    }

    const hasil = a / b;

    //pascakondisi

    if (hasil * b === a) {
        return hasil;
    }

    return hasil;

}

try {
    console.log(divide(10, 2));

} catch (error) {
    console.error(error);
}
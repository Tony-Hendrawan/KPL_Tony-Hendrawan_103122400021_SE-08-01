export function hitungHuruf(str) {
    if (!str) return 0;

    const huruf = str.match(/[a-zA-Z]/g);
    return huruf ? huruf.length : 0;

}

export function hitungKata(str) {
    if (!str) return 0;

    const kata = str.match(/[a-zA-Z]+/g);
    return kata ? kata.length : 0;
}

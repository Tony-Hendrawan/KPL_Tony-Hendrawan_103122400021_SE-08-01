const angka = 19000000;

const formatter = new Intl.NumberFormat('id-ID', {
    notation: 'compact',
    compactDisplay: 'long'
});

console.log(formatter.format(angka));
// 19 juta
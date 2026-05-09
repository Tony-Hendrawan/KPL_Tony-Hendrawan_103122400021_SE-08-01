import { pslv_dua, pslv_tiga, ptlsv_dua } from "Persamaan";


const jawaban1 = pslv_dua("3x", 12);
const jawaban2 = pslv_tiga("x", -8, 10);
const jawaban3 = ptlsv_dua("-2x", 10, "<=", 4);

console.log(jawaban1);
console.log(jawaban2);
console.log(jawaban3);
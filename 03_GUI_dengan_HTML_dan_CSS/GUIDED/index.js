const editorElement = document.getElementById("editor-kecil");
const elemenHf = document.getElementById("hf");
const elemenHb = document.getElementById("hb");

function hitungHuruf(event) {
    const inputIsi = event.target.value;
    const chr = inputIsi.split('');

    let jumlahHurufSejati = 0;
    let jumlahHurufBesar = 0;
    chr.forEach(karakter => {
        const spasi = /\s+/;
        const besar = /[A-Z]/;
        if (spasi.test(karakter)) {
            return;
        }
        if (besar.test(karakter)) {
            return;
        }

        jumlahHurufSejati = jumlahHurufSejati + 1;
    });

    elemenHf.textContent = jumlahHurufSejati;
    elemenHb.textContent = jumlahHurufBesar;
}

elemenEditor.addEventListener("input", hitungHuruf);
const editorElement = document.getElementById("editor-kecil");
const charCountElement = document.getElementById("hf");
const upperCountElement = document.getElementById("hb");
const lowerCountElement = document.getElementById("hk");
const upperButton = document.getElementById("huruf-besar");
const lowerButton = document.getElementById("huruf-kecil");
const buttonLightElement = document.getElementById("tombol-terang");
const buttonDarkElement = document.getElementById("tombol-gelap");

// Menghitung total huruf, huruf besar, dan huruf kecil dari teks saat ini.
function updateCounts(text) {
    const textLength = text.length;
    const upperCaseCount = (text.match(/[A-Z]/g) || []).length;
    const lowerCaseCount = (text.match(/[a-z]/g) || []).length;

    charCountElement.textContent = textLength;
    upperCountElement.textContent = upperCaseCount;
    lowerCountElement.textContent = lowerCaseCount;
}

// ktika pengguna mengetik, jumlah bertambah
editorElement.addEventListener("input", (event) => {
    updateCounts(event.target.value);
});

// Mengubah teks menjadi huruf besar
upperButton.addEventListener("click", () => {
    editorElement.value = editorElement.value.toUpperCase();
    updateCounts(editorElement.value);
});

// Mengubah teks menjadi huruf kecil
lowerButton.addEventListener("click", () => {
    editorElement.value = editorElement.value.toLowerCase();
    updateCounts(editorElement.value);
});

// Mengubah tema ke mode terang atau gelap
buttonLightElement.addEventListener("click", () => {
    document.documentElement.classList.remove("mode-gelap");
});

buttonDarkElement.addEventListener("click", () => {
    document.documentElement.classList.add("mode-gelap");
});

updateCounts(editorElement.value);
// Ambil container tombol mode (gelap/terang).
const modeDivElement = document.getElementById("mode-div");

// Class untuk menyimpan dan mengubah state mode tampiln
class nodeState {
    #state;

    // Default mode saat halaman dibuka adalah terang
    constructor() {
        this.#state = "light";
    }

    // Ubah class CSS pada body berdasarkan mode lama dan mode baru
    #toggleNode(oldState, newState) {
        const body = document.body;

        if (oldState === "dark") {
            body.classList.remove("mode-gelap");
        }

        if (newState === "dark") {
            body.classList.add("mode-gelap");
        }
    }


    get() {
        return this.#state;
    }

    // Set mode baru lalu terapkan perubahan ke tampilan
    set(newState) {
        if (newState == this.#state) return;

        const oldState = this.#state;
        this.#state = newState;

        this.#toggleNode(oldState, newState);


    }
}

// Buat objek state manager untuk mode tampilan
const node = new nodeState();

// listen klik pada tombol mode, lalu ubah mode sesuai value tombol
modeDivElement.addEventListener("click", (event) => {
    const btnElement = event.target.closest("button");
    if (!btnElement) {
        return;
    }

    node.set(btnElement.value);
});

const editorElement = document.getElementById("editor-kecil");
const charCountElement = document.getElementById("hf");
const upperCountElement = document.getElementById("hb");
const lowerCountElement = document.getElementById("hk");
const upperButton = document.getElementById("huruf-besar");
const lowerButton = document.getElementById("huruf-kecil");


// Menghitung total huruf, huruf besar, dan huruf kecil dari teks saat ini.
function updateCounts(text) {
    const textLength = text.length;
    const upperCaseCount = (text.match(/[A-Z]/g) || []).length;
    const lowerCaseCount = (text.match(/[a-z]/g) || []).length;

    charCountElement.textContent = textLength;
    upperCountElement.textContent = upperCaseCount;
    lowerCountElement.textContent = lowerCaseCount;
}

// Ketika pengguna mengetik, jumlah diperbarui.
editorElement.addEventListener("input", (event) => {
    updateCounts(event.target.value);
});

// Mengubah teks menjadi huruf besar.
upperButton.addEventListener("click", () => {
    editorElement.value = editorElement.value.toUpperCase();
    updateCounts(editorElement.value);
});

// Mengubah teks menjadi huruf kecil.
lowerButton.addEventListener("click", () => {
    editorElement.value = editorElement.value.toLowerCase();
    updateCounts(editorElement.value);
});



updateCounts(editorElement.value);
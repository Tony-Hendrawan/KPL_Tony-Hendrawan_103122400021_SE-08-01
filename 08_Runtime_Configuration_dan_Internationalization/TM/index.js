require('dotenv').config({ quiet: true });

const nominalList = [25000, 50000, 100000];

function formatRupiah(nominal) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(nominal);
}

function formatTanggal(tanggal) {
    return new Intl.DateTimeFormat('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    }).format(tanggal);
}

function formatNilai(nilai) {
    return new Intl.NumberFormat('id-ID', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(nilai);
}

async function getData() {
    try {
        if (!process.env.BASE_API) {
            console.error('BASE_API belum diset di file .env');
            return;
        }

        const response = await fetch(`${process.env.BASE_API}/currencies/idr.json`, {
            headers: {
                Accept: 'application/json'
            }
        });

        if (!response.ok) {
            console.error('Gagal mengambil data kurs');
            return;
        }

        const data = await response.json();
        if (!data?.idr) {
            console.error('Data kurs tidak lengkap');
            return;
        }

        const cnyRate = data.idr.cny;
        const eurRate = data.idr.eur;

        const tanggal = formatTanggal(new Date());

        for (const nominal of nominalList) {
            const cnyValue = nominal * cnyRate;
            const eurValue = nominal * eurRate;

            console.log(
                `Kurs ${formatRupiah(nominal)} pada ${tanggal} adalah CNH ${formatNilai(cnyValue)} dan ${formatNilai(eurValue)} €`
            );
        }
    } catch (error) {
        console.error('Error:', error.message);
    }
}

getData();
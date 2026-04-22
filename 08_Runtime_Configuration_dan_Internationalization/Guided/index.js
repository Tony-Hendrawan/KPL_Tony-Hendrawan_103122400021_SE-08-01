require('dotenv').config();

async function ambilData() {
    try {
        const respon = await fetch(process.env.BASE_API, {
            headers: {
                'Accept': 'application/json'
            }
        });

        if (!respon.ok) throw new Error();

        const data = await respon.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }

}

ambilData();
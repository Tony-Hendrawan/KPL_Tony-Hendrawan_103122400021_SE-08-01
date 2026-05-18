import test from 'node:test';
import assert from 'node:assert';

function main() {
    const data = [
        "123",
        456,
        "hello",
        78.9,
        true,
    ];

    for (let i = 0; i < data.length; i++) {
        const result = processData(data[i]);
        console.log(`Item ${i + 1}: ${data[i]} -> ${result}`);
    }
}

function processData(data) {
    const str = data.toLowerCase();
    const num = parseInt(str);
    if (!isNaN(num) && str === String(num)) {
        return `Number: ${num * 2}`;
    }
    return `Teks: ${str} (panjangnya: ${str.length})`;

}

test.describe('Pengujian processData()', () => {

    test.it('String "123" harus return Number: 246', () => {
        assert.strictEqual(processData("123"), "Number: 246");
    });

    test.it('String "hello" harus return Teks: hello', () => {
        const result = processData("hello");
        assert.ok(result.includes("hello"));
    });

    test.it('Number 456 harus return Number: 912', () => {
        const result = processData(456);
        assert.strictEqual(result, "Number: 912");
    });

    test.it('Float 78.9 harus return Teks: 78.9', () => {
        const result = processData(78.9);
        assert.ok(result.includes("78.9"));
    });

    test.it('Boolean true harus return Teks: true', () => {
        const result = processData(true);
        assert.ok(result.includes("true"));
    });
});

// LUAS SEGITIGA
function luas() {
    const panjang_alas = document.getElementById("input_panjang_alas");
    const tinggi = document.getElementById("input_tinggi");
    const hitung_luas = document.getElementById("hitung_luas");
    const reset = document.getElementById("reset_luas");
    const output = document.getElementById("output_luas");
    let a = panjang_alas.value;
    let t = tinggi.value;
    let l = 0.5 * a * t;
    output_luas.innerHTML = `L = 1/2 x a x t <br> L = 1/2 x ${a} x ${t} <br> L = ${l} cm2`;
}

function reset_luas() {

    const panjang_alas = document.getElementById("input_panjang_alas");
    const tinggi = document.getElementById("input_tinggi");
    panjang_alas.value = "";
    tinggi.value = "";
    output_luas.innerHTML = "";
}

// KELILING SEGITIGA
function keliling() {

    var sisi_a = document.getElementById("input_sisi_a");
    var sisi_b = document.getElementById("input_sisi_b");
    var sisi_c = document.getElementById("input_sisi_c");
    const hitung_keliling = document.getElementById("hitung_keliling");
    const output_keliling = document.getElementById("output_keliling");
    const resetKeliling = document.getElementById("reset_keliling");

    let s1 = parseFloat(sisi_a.value);
    let s2 = parseFloat(sisi_b.value);
    let s3 = parseFloat(sisi_c.value);
    let k = s1 + s2 + s3;
    output_keliling.innerHTML = `K = S1 + S2 + S3 <br> K = ${s1} + ${s2} + ${s3} <br> K = ${k}`;
}

function reset_keliling() {

    var sisi_a = document.getElementById("input_sisi_a");
    var sisi_b = document.getElementById("input_sisi_b");
    var sisi_c = document.getElementById("input_sisi_c");
    sisi_a.value = "";
    sisi_b.value = "";
    sisi_c.value = "";
    output_keliling.innerHTML = "";
}
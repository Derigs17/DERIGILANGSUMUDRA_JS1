
// contoh penggunaan if
let umur = 20;

if (umur >= 18) {
    console.log("Anda sudah dewasa, Anda boleh pacaran.");
} else {
    console.log("Anda masih di bawah umur, Anda tidak booleh pacaran.");
}


// contoh else
var cuaca = "cerah";

if (cuaca === "hujan") {
    console.log("Cuaca sedang hujan, sebaiknya jangan dulu ngedate.");
} else {
    console.log("Tidak hujan, Gas ngedate.");
}


// contoh nested if
let nilai = 92;

if (nilai >= 90) {
    console.log("Nilai Anda A, Boleh jalan-jalan.");
} else {
    if (nilai >= 80) {
        console.log("Nilai Anda B, Boleh jalan-jalan.");
    } else {
        if (nilai >= 70) {
            console.log("Nilai Anda C, Tidak Boleh jalan-jalan.");
        } else {
            if (nilai >= 60) {
                console.log("Nilai Anda D, belajar lagi ya.");
            } else {
                console.log("Nilai Anda E, Mikir ga boleh jalan-jalan anda bodoh.");
            }
        }
    }
}


// contoh switch case
var hari = "Senin";

switch (hari) {
    case "Senin":
        console.log("Hari ini adalah Senin.");
        break;
    case "Selasa":
        console.log("Hari ini adalah Selasa.");
        break;
    case "Rabu":
        console.log("Hari ini adalah Rabu.");
        break;
    case "Kamis":
        console.log("Hari ini adalah Kamis.");
        break;
    case "Jumat":
        console.log("Hari ini adalah Jumat.");
        break;
    case "Sabtu":
        console.log("Hari ini adalah Sabtu.");
        break;
    case "Minggu":
        console.log("Hari ini adalah Minggu.");
        break;
    default:
        console.log("Hari tidak valid.");
}


// contoh for
for (var i = 0; i < 3; i++) {
    console.log("Pacar  ke-" + (i + 1));
}

// contoh while
let counter = 1;

while (counter <= 3) {
  console.log("Mantan ke-" + counter);
  counter++;
}

// contoh do while
let count = 1;
do {
  console.log("Selingkuhan ke-" + count);
  count++;
} while (count <= 3);

// contoh fungction
function tambah(a, b) {
    return a + b;
  }

  const hasil = tambah(5, 3);
  console.log("Hasil penjumlahan: " + hasil);
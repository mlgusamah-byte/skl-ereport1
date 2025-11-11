// Ambil data laporan dari localStorage
let laporanList = JSON.parse(localStorage.getItem('laporanList')) || [];

// Fungsi animasi angka naik
function animateNumber(el, target, duration = 1500) {
  let start = 0;
  const stepTime = Math.abs(Math.floor(duration / target));
  const timer = setInterval(() => {
    start++;
    el.textContent = start;
    if (start >= target) clearInterval(timer);
  }, stepTime);
}

// Total laporan
const totalLaporanEl = document.getElementById('totalLaporan');
animateNumber(totalLaporanEl, laporanList.length, 1500);

// Laporan hari ini
const laporanHariIniEl = document.getElementById('laporanHariIni');
const today = new Date().toLocaleDateString();

const todayCount = laporanList.filter(item => item.tanggal === today).length;
animateNumber(laporanHariIniEl, todayCount, 1500);

// Total siswa unik
const totalSiswaEl = document.getElementById('totalSiswa');
const siswaUnik = [...new Set(laporanList.map(item => item.nama))].length;
animateNumber(totalSiswaEl, siswaUnik, 1500);


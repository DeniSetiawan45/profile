/**
 * ================================================
 * JAVASCRIPT UNTUK WEBSITE DENI SETIAWAN
 * File: script.js
 * Sewa Website 100k/Bulan | FREE 5x Revisi
 * ================================================
 */

// ========== 1. SLIDER MANUAL (5 SLIDE, TERTAMPIL 2) ==========
document.addEventListener('DOMContentLoaded', function() {
  const sliderWrapper = document.getElementById('productSlider');
  const prevBtn = document.getElementById('prevSlideBtn');
  const nextBtn = document.getElementById('nextSlideBtn');
  const dotsContainer = document.getElementById('sliderDots');
  
  if (!sliderWrapper) return;
  
  const slides = Array.from(sliderWrapper.children);
  const totalSlides = slides.length;
  let slidesToShow = 2;
  let currentIndex = 0;
  
  function updateSlidesToShow() {
    if (window.innerWidth < 768) {
      slidesToShow = 1;
    } else {
      slidesToShow = 2;
    }
    currentIndex = 0;
    updateSliderPosition();
    updateDots();
  }
  
  function updateSliderPosition() {
    const slideWidth = slides[0]?.offsetWidth || 0;
    const gap = 30;
    const offset = currentIndex * (slideWidth + gap);
    sliderWrapper.style.transform = `translateX(-${offset}px)`;
    updateDots();
  }
  
  function updateDots() {
    if (!dotsContainer) return;
    const totalDots = Math.max(0, totalSlides - slidesToShow + 1);
    dotsContainer.innerHTML = '';
    for (let i = 0; i < totalDots; i++) {
      const dot = document.createElement('div');
      dot.classList.add('dot');
      if (i === currentIndex) dot.classList.add('active');
      dot.addEventListener('click', () => {
        currentIndex = i;
        updateSliderPosition();
      });
      dotsContainer.appendChild(dot);
    }
  }
  
  function nextSlide() {
    const maxIndex = Math.max(0, totalSlides - slidesToShow);
    if (currentIndex < maxIndex) {
      currentIndex++;
      updateSliderPosition();
    }
  }
  
  function prevSlide() {
    if (currentIndex > 0) {
      currentIndex--;
      updateSliderPosition();
    }
  }
  
  if (prevBtn) prevBtn.addEventListener('click', prevSlide);
  if (nextBtn) nextBtn.addEventListener('click', nextSlide);
  
  let resizeTimeout;
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(updateSlidesToShow, 150);
  });
  
  updateSlidesToShow();
});

// ========== 2. TOMBOL ORDER DAN KONSULTASI ==========
function showOrderAlert() {
  alert("📞 Hubungi Deni Setiawan: +62 812-3456-7890\n\nAtau klik tombol WhatsApp di pojok kanan bawah untuk order langsung!\n\n✅ FREE 5x revisi per bulan\n✅ Hak akses edit & kelola sendiri");
}

const getInTouchBtn = document.getElementById('getInTouchBtn');
const letsTalkBtn = document.getElementById('letsTalkBtn');
const aboutGetInTouch = document.getElementById('aboutGetInTouch');
const orderNowBtns = document.querySelectorAll('.orderNowBtn');

if (getInTouchBtn) getInTouchBtn.addEventListener('click', showOrderAlert);
if (letsTalkBtn) letsTalkBtn.addEventListener('click', showOrderAlert);
if (aboutGetInTouch) aboutGetInTouch.addEventListener('click', showOrderAlert);
orderNowBtns.forEach(btn => btn.addEventListener('click', showOrderAlert));

// ========== 3. NAMA DI HERO ==========
const heroNameSpan = document.getElementById('heroName');
const namaKamuSpan = document.getElementById('namaKamu');
if (heroNameSpan && namaKamuSpan) {
  const nama = namaKamuSpan.innerText.split(' ')[0];
  heroNameSpan.innerText = nama;
}

// ========== 5. HAMBURGER MENU ==========
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
  });
}

// ========== 6. PEMBERITAHUAN LETAK LINK WA ==========
console.log("==========================================");
console.log("📍 CARA LETAKKAN LINK WHATSAPP:");
console.log("Buka file index.html, cari baris:");
console.log("<a href='https://wa.me/6281234567890?...' class='wa-float'>");
console.log("Ganti angka 6281234567890 dengan nomor WA ANDA");
console.log("Contoh: https://wa.me/6282112345678?text=Halo");
console.log("==========================================");
console.log("✅ Website Deni Setiawan - Sewa Website 100k/Bulan");
console.log("✅ FREE 5x revisi per bulan");
console.log("✅ Hak akses edit & kelola sendiri");

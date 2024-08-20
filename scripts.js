
let currentIndex = 0;
const images = document.querySelectorAll('.slideshow img');
const totalImages = images.length;

setInterval(() => {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % totalImages;
    images[currentIndex].classList.add('active');
}, 3000); // เปลี่ยนรูปทุก 3 วินาที

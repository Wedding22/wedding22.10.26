/* ==========================================
   OPEN INVITATION + MUSIC
========================================== */

const openButton = document.getElementById("openInvitation");
const hero = document.getElementById("hero");
const music = document.getElementById("music");

openButton.addEventListener("click", () => {

    music.play().catch(() => {});

    hero.style.transition = "opacity .8s ease";

    hero.style.opacity = "0";

    setTimeout(() => {

        hero.style.display = "none";

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 800);

});


/* ==========================================
   COUNTDOWN
========================================== */

const weddingDate = new Date("October 22, 2026 17:00:00").getTime();

const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

function updateCountdown() {

    const now = new Date().getTime();

    const distance = weddingDate - now;

    if (distance <= 0) {

        days.textContent = "00";
        hours.textContent = "00";
        minutes.textContent = "00";
        seconds.textContent = "00";

        return;

    }

    const d = Math.floor(distance / (1000 * 60 * 60 * 24));

    const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    const s = Math.floor((distance % (1000 * 60)) / 1000);

    days.textContent = String(d).padStart(2, "0");
    hours.textContent = String(h).padStart(2, "0");
    minutes.textContent = String(m).padStart(2, "0");
    seconds.textContent = String(s).padStart(2, "0");

}

updateCountdown();

setInterval(updateCountdown, 1000);
/* ==========================================
   FADE ANIMATION
========================================== */

const sections = document.querySelectorAll(".fade-section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.15
});

sections.forEach(section => {
    observer.observe(section);
});


/* ==========================================
   FINAL GALLERY
========================================== */

const galleryPhotos = document.querySelectorAll(".gallery-photo");

let currentPhoto = 0;

function changePhoto() {

    galleryPhotos[currentPhoto].classList.remove("active");

    currentPhoto++;

    if (currentPhoto >= galleryPhotos.length) {

        currentPhoto = 0;

    }

    galleryPhotos[currentPhoto].classList.add("active");

}

setInterval(changePhoto, 5000);


/* ==========================================
   PRELOAD IMAGES
========================================== */

window.addEventListener("load", () => {

    const images = [

        "images/photo1.JPG",
        "images/photo2.JPG",
        "images/photo3.JPG",
        "images/photo4.JPG",
        "images/photo5.JPG",
        "images/table.JPG"

    ];

    images.forEach(src => {

        const img = new Image();

        img.src = src;

    });

});


/* ==========================================
   BUTTON ANIMATION
========================================== */

const heroButton = document.querySelector(".hero-button");

heroButton.addEventListener("mouseenter", () => {

    heroButton.style.transform = "translateY(-3px) scale(1.02)";

});

heroButton.addEventListener("mouseleave", () => {

    heroButton.style.transform = "translateY(0) scale(1)";

});


/* ==========================================
   MAP BUTTON EFFECT
========================================== */

const mapButton = document.querySelector(".map-button");

if (mapButton) {

    mapButton.addEventListener("mouseenter", () => {

        mapButton.style.transform = "translateY(-3px)";

    });

    mapButton.addEventListener("mouseleave", () => {

        mapButton.style.transform = "translateY(0)";

    });

}


/* ==========================================
   END
========================================== */

console.log("Wedding invitation loaded successfully 🤍");
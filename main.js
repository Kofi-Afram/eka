/* ABOUT JS */
const sections = document.querySelectorAll(".pull-up");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.2 }
);

sections.forEach(section => observer.observe(section));


/* ================= PULL-UP ANIMATION ================= */
const reveals = document.querySelectorAll('.reveal');

function handleReveal() {
  reveals.forEach(section => {
    const top = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (top < windowHeight - 120) {
      section.classList.add('active');
    }
  });
}

window.addEventListener('scroll', handleReveal);
window.addEventListener('load', handleReveal);

/* SERVICE JS */
/* ================= SERVICES CAROUSEL ================= */

const serviceCarousel = document.querySelector('#servicesCarousel');
if(serviceCarousel) {
  const carousel = new bootstrap.Carousel(serviceCarousel, {
    interval: 3000, // 3 seconds
    ride: 'carousel',
    pause: false,
    wrap: true
  });
}

/* ================= CTA BUTTON POP ================= */
const ctaButtons = document.querySelectorAll('.category-btn');

ctaButtons.forEach(btn => {
  btn.addEventListener('mouseenter', () => {
    btn.style.transform = 'scale(1.08)';
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.transform = 'scale(1)';
  });
});

/* ================= OPTIONAL: HERO SLIDE-IN TEXT ================= */
const heroText = document.querySelector('.hero-text');
if(heroText) {
  setTimeout(() => {
    heroText.classList.add('active');
  }, 500); // small delay for smooth entrance
}


/* HARDWARE JS */
const imageSets = {
  printer: [
    "addons/images/printer1.jpeg",
    "addons/images/printer2.jpeg",
    "addons/images/printer-3.avif",
    "addons/images/printer 4.jpeg",
    "addons/images/printer5.jpeg",
    "addons/images/printer6.webp",
    "addons/images/printer-7.png",
    "addons/images/printer-8.jpeg"
  ],
  laptop: [
    "addons/images/laptop1.jpg",
    "addons/images/laptop2.jpg",
    "addons/images/laptop3.jpg"
  ],
  plotter: [
    "addons/images/plotter1.jpg",
    "addons/images/plotter2.jpg",
    "addons/images/plotter3.jpg"
  ],
  projector: [
    "addons/images/projector1.jpg",
    "addons/images/projector2.jpg",
    "addons/images/projector3.jpg"
  ]
};

document.querySelectorAll(".carousel").forEach(carousel => {
  const img = carousel.querySelector(".carousel-img");
  const type = img.dataset.type;
  let index = 0;

  carousel.querySelector(".arrow.right").onclick = () => {
    index = (index + 1) % imageSets[type].length;
    img.src = imageSets[type][index];
  };

  carousel.querySelector(".arrow.left").onclick = () => {
    index = (index - 1 + imageSets[type].length) % imageSets[type].length;
    img.src = imageSets[type][index];
  };
});


/* SOFTWARE JS */
/* ================= PULL-UP ANIMATION ================= */
const revealElements = document.querySelectorAll(".software-card");

const revealOnScroll = () => {
  revealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight - 120) {
      el.classList.add("active");
    }
  });
};

/* ================= SLIDE-IN BULLETS ================= */
const bullets = document.querySelectorAll(".offer-bullet");

const animateBullets = () => {
  bullets.forEach((bullet, index) => {
    const bulletTop = bullet.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (bulletTop < windowHeight - 100) {
      setTimeout(() => {
        bullet.classList.add("active");
      }, index * 150); // staggered slide-in
    }
  });
};

/* ================= SCROLL LISTENER ================= */
window.addEventListener("scroll", () => {
  revealOnScroll();
  animateBullets();
});

/* ================= RUN ON LOAD ================= */
revealOnScroll();
animateBullets();

// Observe all animated items
document.querySelectorAll(".animate").forEach((el) => {
  observer.observe(el);
});

/* Contact js */
/* ===============================
   GLOBAL ANIMATIONS & INTERACTIONS
   InterSync Global
================================ */

/* ---------- PULL-UP ON SCROLL ---------- */
document.addEventListener("DOMContentLoaded", () => {
  const pullElements = document.querySelectorAll(".pull-up");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.2 }
  );

  pullElements.forEach(el => observer.observe(el));
});


/* ---------- CTA POP IN / POP OUT ---------- */
document.addEventListener("DOMContentLoaded", () => {
  const ctaButtons = document.querySelectorAll(".cta-btn, .cta-outline");

  ctaButtons.forEach(btn => {
    btn.addEventListener("mouseenter", () => {
      btn.style.transform = "scale(1.06)";
    });

    btn.addEventListener("mouseleave", () => {
      btn.style.transform = "scale(1)";
    });
  });
});


/* ---------- STAT COUNT + POP EFFECT ---------- */
document.addEventListener("DOMContentLoaded", () => {
  const statNumbers = document.querySelectorAll(".stat-number");

  const countObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = +el.dataset.target;
          let count = 0;
          const speed = target / 80;

          const counter = setInterval(() => {
            count += speed;
            if (count >= target) {
              el.textContent = target + "+";
              clearInterval(counter);

              /* POP EFFECT AFTER COUNT */
              el.classList.add("stat-pop");
            } else {
              el.textContent = Math.floor(count);
            }
          }, 20);

          observer.unobserve(el);
        }
      });
    },
    { threshold: 0.4 }
  );

  statNumbers.forEach(num => countObserver.observe(num));
});


/* ---------- SOFT FLOAT (UP & DOWN) ---------- */
document.addEventListener("DOMContentLoaded", () => {
  const floatingElements = document.querySelectorAll(".float");

  floatingElements.forEach(el => {
    let direction = 1;
    setInterval(() => {
      el.style.transform = `translateY(${direction * 6}px)`;
      direction *= -1;
    }, 1500);
  });
});

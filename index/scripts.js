document.addEventListener('DOMContentLoaded', function () {
  const navbar = document.getElementById('mainNav');
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  const footer = document.querySelector('footer');

  function onScroll() {
      let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
      let currentLink = '';

      const footerTop = footer.offsetTop;
      const viewportHeight = window.innerHeight;

      if (scrollPosition + viewportHeight >= footerTop) {
          navLinks.forEach(link => link.classList.remove('active'));
          return;
      }

      sections.forEach(section => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (scrollPosition >= sectionTop - 200 && scrollPosition < sectionTop + sectionHeight) {
              currentLink = section.id;
          }
      });

      navLinks.forEach(link => {
          if (link.getAttribute('href').substring(1) === currentLink) {
              link.classList.add('active');
          } else {
              link.classList.remove('active');
          }
      });
  }

  window.addEventListener('scroll', onScroll);
  onScroll();
});


gsap.registerPlugin(ScrollTrigger);

const textElements = gsap.utils.toArray('.services-text');

textElements.forEach(text => {
  gsap.to(text, {
    backgroundSize: '100%',
    ease: 'none',
    scrollTrigger: {
      trigger: text,
      start: 'center 100%',
      end: 'center 20%',
      scrub: true,
    },
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const scrollContainer = document.getElementById('image-container');
  const leftArrow = document.getElementById('left-arrow');
  const rightArrow = document.getElementById('right-arrow');

  leftArrow.addEventListener('click', () => {
    scrollContainer.scrollTo({
      left: scrollContainer.scrollLeft - 500,
      behavior: 'smooth'
    });
  });

  rightArrow.addEventListener('click', () => {
    scrollContainer.scrollTo({
      left: scrollContainer.scrollLeft + 500,
      behavior: 'smooth'
    });
  });
});


gsap.from(".pre-loader-text", 0.8, {
  y: 40,
  opacity: 0,
  ease: "power2.inOut",
  delay: 1,
});

gsap.from(".loader", 2, {
  width: 0,
  ease: "power4.inOut",
  delay: 2,
});

gsap.to(".pre-loader", 2, {
  top: "-100%",
  ease: "power4.inOut",
  delay: 4,
});

const scrollers = document.querySelectorAll(".scroller");

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    scroller.setAttribute("data-animated", true);

    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}









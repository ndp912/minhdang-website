// const track = document.getElementById("image-track");

// const handleOnDown = e => track.dataset.mouseDownAt = e.clientX;

// const handleOnUp = () => {
//   track.dataset.mouseDownAt = "0";  
//   track.dataset.prevPercentage = track.dataset.percentage;
// }

// const handleOnMove = e => {
//   if(track.dataset.mouseDownAt === "0") return;
  
//   const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
//         maxDelta = window.innerWidth / 2;
  
//   const percentage = (mouseDelta / maxDelta) * -100,
//         nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
//         nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);
  
//   track.dataset.percentage = nextPercentage;
  
//   track.animate({
//     transform: `translate(${nextPercentage}%, -50%)`
//   }, { duration: 1200, fill: "forwards" });
  
//   for(const image of track.getElementsByClassName("project-image")) {
//     image.animate({
//       objectPosition: `${100 + nextPercentage}% center`
//     }, { duration: 1200, fill: "forwards" });
//   }
// }

window.onmousedown = e => handleOnDown(e);

window.ontouchstart = e => handleOnDown(e.touches[0]);

window.onmouseup = e => handleOnUp(e);

window.ontouchend = e => handleOnUp(e.touches[0]);

window.onmousemove = e => handleOnMove(e);

window.ontouchmove = e => handleOnMove(e.touches[0]);

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
    scrollContainer.scrollLeft -= 500;
  });

  rightArrow.addEventListener('click', () => {
    scrollContainer.scrollLeft += 500;
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

let elements = document.querySelectorAll(".text");

      elements.forEach((element) => {
        let innerText = element.innerText;
        element.innerHTML = "";

        let textContainer = document.createElement("div");
        textContainer.classList.add("block");

        for (let letter of innerText) {
          let span = document.createElement("span");
          span.innerText = letter.trim() === "" ? "\xa0" : letter;
          span.classList.add("letter");
          textContainer.appendChild(span);
        }

        element.appendChild(textContainer);
        element.appendChild(textContainer.cloneNode(true));
      });

      elements.forEach((element) => {
        element.addEventListener("mouseover", () => {
          element.classList.remove("play");
        });
      });
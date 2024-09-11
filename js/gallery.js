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

  document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide");
    let currentSlideIndex = 0;
    let isAnimating = false;
    let currentTopValue = 0;

    const elements = [
      { selector: ".prefix", delay: 0 },
      { selector: ".names", delay: 0.15 },
      { selector: ".years", delay: 0.3 },
    ];

    slides.forEach((slide, idx) => {
      if (idx !== 0) {
        const img = slide.querySelector("img");
        gsap.set(img, { scale: 2, top: "4em" });
      }
    });

    function showSlide(index) {
      if (isAnimating) return;
      isAnimating = true;
      const slide = slides[index];
      const img = slide.querySelector("img");

      currentTopValue -= 30;

      elements.forEach((elem) => {
        gsap.to(document.querySelector(elem.selector), {
          y: `${currentTopValue}px`,
          duration: 2,
          ease: "power4.inOut",
          delay: elem.delay,
        });
      });

      gsap.to(img, {
        scale: 1,
        top: "0%",
        duration: 2,
        ease: "power3.inOut",
      });
      gsap.to(
        slide,
        {
          clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0 100%)",
          duration: 2,
          ease: "power4.inOut",
          onComplete: () => {
            isAnimating = false;
          },
        },
        "<"
      );
    }

    function hideSlide(index) {
      if (isAnimating) return;
      isAnimating = true;
      const slide = slides[index];
      const img = slide.querySelector("img");

      currentTopValue += 30;
      elements.forEach((elem) => {
        gsap.to(document.querySelector(elem.selector), {
          y: `${currentTopValue}px`,
          duration: 2,
          ease: "power4.inOut",
          delay: elem.delay,
        });
      });

      gsap.to(slide, {
        clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
        duration: 2,
        ease: "power4.inOut",
      });

      gsap.to(img, {
        scale: 2,
        top: "4em",
        duration: 2,
        ease: "power3.inOut",
      });

      gsap.to(
        slide,
        {
          clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
          duration: 2,
          ease: "power4.inOut",
          onComplete: () => {
            isAnimating = false;
          },
        },
        "<"
      );
    }

    window.addEventListener("wheel", (e) => {
      if (isAnimating) return;
      if (e.deltaY > 0 && currentSlideIndex < slides.length - 1) {
        showSlide(currentSlideIndex + 1);
        currentSlideIndex++;
      } else if (e.deltaY < 0 && currentSlideIndex > 0) {
        hideSlide(currentSlideIndex);
        currentSlideIndex--;
      }
    });
  });

  
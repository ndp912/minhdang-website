(function () {
  emailjs.init("RoAkl2ZdhVxLctCOr");
})();

document
  .getElementById("bookingForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const userName = document.getElementById("name").value;
    const userPhone = document.getElementById("phone").value;
    const userEmail = document.getElementById("email").value;
    const bookingDate = document.getElementById("date").value;
    const bookingTime = document.getElementById("time").value;

    const userTemplateParams = {
      name: userName,
      phone: userPhone,
      mail: userEmail,
      date: bookingDate,
      time: bookingTime,
    };

    const companyTemplateParams = {
      name: userName,
      phone: userPhone,
      mail: userEmail,
      date: bookingDate,
      time: bookingTime,
    };

    emailjs
      .send("service_eg5aisl", "template_xd9csqi", userTemplateParams)
      .then(function (response) {
        console.log(
          "Email cảm ơn đã gửi cho người dùng:",
          response.status,
          response.text
        );

        return emailjs.send(
          "service_eg5aisl",
          "template_aer3jop",
          companyTemplateParams
        );
      })
      .then(
        function (response) {
          console.log(
            "Email đã gửi cho công ty:",
            response.status,
            response.text
          );
          alert("Cảm ơn bạn! Email xác nhận đã được gửi.");
          document.getElementById("bookingForm").reset();
        },
        function (error) {
          alert("Có lỗi xảy ra khi gửi email. Vui lòng thử lại.");
          console.log("Error:", error);
        }
      );
  });

const inputs = document.querySelectorAll(
  'input[type="text"], input[type="tel"], input[type="email"]'
);
const form = document.getElementById("bookingForm");

inputs.forEach((input) => {
  input.addEventListener("input", function () {
    const innerSpan = this.nextElementSibling.querySelector("span");

    if (this.value !== "") {
      innerSpan.classList.add("hidden");
    } else {
      innerSpan.classList.remove("hidden");
    }
  });
});

form.addEventListener("submit", function () {
  inputs.forEach((input) => {
    const innerSpan = input.nextElementSibling.querySelector("span");
    innerSpan.classList.remove("hidden");
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

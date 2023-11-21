const scriptURL =
        "https://script.google.com/macros/s/AKfycbwMisJ72YmKCMw9SVdnWsB5s9rXC5U_6m6dD9p7ke1gF2kaosSXJ7Ax88c9xJHoA6JIAg/exec";
      const form = document.forms["komentar"];
      const kirim = document.querySelector(".kirim");
      const loading = document.querySelector(".loading");
      const alert = document.querySelector(".alert");
      const silang = document.querySelector(".silang");

      kirim.addEventListener("click", function () {
        loading.classList.toggle("invisible");
      });

      kirim.addEventListener("click", function () {
        kirim.classList.toggle("hidden");
      });

      silang.addEventListener("click", function () {
        alert.classList.toggle("invisible");
      });

      form.addEventListener("submit", (e) => {
        e.preventDefault();
        fetch(scriptURL, { method: "POST", body: new FormData(form) })
          .then((response) => {
            kirim.classList.toggle("hidden");
            loading.classList.toggle("invisible");
            alert.classList.remove("invisible");
            form.reset();
            console.log("Success!", response);
          })
          .catch((error) => console.error("Error!", error.message));
      });

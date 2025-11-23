  let isOpen = false;
  const menu = document.querySelector(".side-menu");
  const btn = document.getElementById("toggleBtn");
  const rightBar = document.getElementById("rightBar");

  btn.addEventListener("click", function () {
    if (!isOpen) {
      menu.classList.add("open");
      menu.style.left = "0px";
      rightBar.classList.add("shift");
      btn.textContent = "✖";
      isOpen = true;
    } else {
      menu.classList.remove("open");
      menu.style.left = "-270px";
      rightBar.classList.remove("shift");
      btn.textContent = "☰";
      isOpen = false;
    }
  });


  let but = document.querySelectorAll(".but");
  let display = document.querySelector(".display");
  let backspace = document.querySelector(".backspace");
  let capslock = document.querySelector(".caps_lock");
  let space = document.querySelector(".space");
  
  for (let k of but) {
    k.addEventListener("click", function () {
      display.textContent += k.value;
    });
  }
  
  let k3 = 1;
  capslock.addEventListener("click", function () {
    if (k3 == 1) {
      for (let k of but) {
        k.value = k.value.toUpperCase();
      }
      k3 += 1;
    } else {
      for (let k of but) {
        k.value = k.value.toLowerCase();
      }
      k3 -= 1;
    }
  });
  
  backspace.addEventListener("click", function () {
    display.textContent = "";
  });
  
  space.addEventListener("click", function () {
    display.textContent += " ";
  });
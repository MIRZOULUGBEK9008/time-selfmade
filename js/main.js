const modifiers = {
  active: "changer__button--active"
}

const elLoader = document.querySelector(".js-loader"),
elTime = document.querySelectorAll(".js-time"),
elDaily = document.querySelector(".daily"),
elWeekly = document.querySelector(".weekly"),
elMonthly = document.querySelector(".monthly");

document.addEventListener("DOMContentLoaded", ()=> {
  setTimeout(() => {
    elLoader.classList.add("loader-wrapper--none");
  }, 1000);
});

// FUNCTIONS
function classRemover() {
  elDaily.classList.remove(modifiers.active);
  elWeekly.classList.remove(modifiers.active);
  elMonthly.classList.remove(modifiers.active);
}

// DAILY
elTime.forEach(time => {
  elDaily.addEventListener("click", () => {
    classRemover();
    elDaily.classList.add(modifiers.active);
    time.textContent = time.dataset.dailyValue * 1;
  });
  elWeekly.addEventListener("click", () => {
    classRemover();
    elWeekly.classList.add(modifiers.active);
    time.textContent = time.dataset.dailyValue * 7;
  });
  elMonthly.addEventListener("click", () => {
    classRemover();
    elMonthly.classList.add(modifiers.active);
    time.textContent = time.dataset.dailyValue * 30;
  });
});

const showToastBtn = document.querySelector(".show-toast");
const horizontalPosition = document.querySelector("#horizontal-position");
const verticalPosition = document.querySelector("#vertical-position");
const toastType = document.querySelector("#toast-type");
const toastMessage = document.querySelector("#toast-message");
const toastsContainer = document.querySelector(".toasts-container");
const durationInput = document.querySelector("#duration");

showToastBtn.addEventListener("click", () => {
  if (horizontalPosition.value === "right") {
    toastsContainer.classList.add("right");
  } else {
    toastsContainer.classList.remove("right");
  }

  if (verticalPosition.value === "bottom") {
    toastsContainer.classList.add("bottom");
  } else {
    verticalPosition.classList.remove("bottom");
  }

  const newToast = document.createElement("div");
  newToast.classList.add("toast");
  newToast.classList.add(toastType.value);
  newToast.textContent = `${toastMessage.value}`;

  const closeIcon = document.createElement("span");
  closeIcon.innerText = " ✕";
  newToast.append(closeIcon);

  function removeToast() {
    setTimeout(() => {
      newToast.remove();
    }, 2000);
  }

  closeIcon.addEventListener("click", () => {
    newToast.remove();
  });

  removeToast();

  //   setTimeout(() => {
  //     removeToast();
  //   }, parseInt(durationInput.value) * 1000);

  toastsContainer.append(newToast);
});

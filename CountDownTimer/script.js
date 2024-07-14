(function () {
  const hour = document.querySelector(".hour");
  const min = document.querySelector(".minute");
  const sec = document.querySelector(".sec");
  const startBtn = document.querySelector(".start");
  const stopBtn = document.querySelector(".stop");
  const resetBtn = document.querySelector(".reset");

  let timerId = null;

  startBtn.addEventListener("click", () => {
    if (hour.value == 0 && min.value == 0 && sec.value == 0) return;

    function startTimer() {
      startBtn.style.display = "none";
      stopBtn.style.display = "block";

      timerId = setInterval(timer, 1000);
    }
    startTimer();

    function timer() {
      if (sec.value > 60) {
        min.value++;
        sec.value = parseInt(sec.value) - 59;
      }
      if (min.value > 60) {
        hour.value++;
        min.value = parseInt(min.value) - 60;
      }
      min.value = min.value > 60 ? 60 : min.value;

      if (hour.value == 0 && min.value == 0 && sec.value == 0) {
        hour.value = min.value = sec.value = "";
        stopTimer();
      } else if (sec.value != 0) {
        sec.value = `${sec.value <= 10 ? "0" : ""}${sec.value - 1}`;
      } else if (min.value != 0 && sec.value == 0) {
        sec.value = 59;
        min.value = `${min.value <= 10 ? "0" : ""}${min.value - 1}`;
      } else if (hour.value != 0 && min.value == 0) {
        min.value = 60;
        hour.value = `${hour.value <= 10 ? "0" : ""}${hour.value - 1}`;
      }
      return;
    }

    function stopTimer(state) {
      startBtn.innerHTML = state === "pause" ? "Continue" : "Start";

      stopBtn.style.display = "none";
      startBtn.style.display = "block";
      clearInterval(timerId);
    }

    stopBtn.addEventListener("click", function () {
      stopTimer("pause");
    });

    resetBtn.addEventListener("click", function () {
      hour.value = min.value = sec.value = "";
    });
  });
})();

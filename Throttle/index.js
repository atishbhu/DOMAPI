const btnRef = document.querySelector("#add-btn");

function throttle(fn, delay) {
  let timerId = null;
  return function () {
    if (!timerId) {
      timerId = setTimeout(() => {
        fn();
        clearTimeout(timerId);
        timerId = null;
      }, delay);
    }
  };
}
let count = 0;
function fn() {
  count++;
  console.log(count);
}
const delay = 2000;
const throttleFn = throttle(fn, delay);
btnRef.addEventListener("click", () => {
  throttleFn();
});

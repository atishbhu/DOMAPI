const debounce = (fn, delay) => {
  let timerId = null;
  return function (text) {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      fn(text);
    }, delay);
  };
};

function fn(text) {
  console.log(text);
}
const delay = 2000;
const debounceFn = debounce(fn, delay);

const inputRef = document.querySelector("#input-search");
inputRef.addEventListener("keyup", (e) => {
  debounceFn(e.target.value);
});

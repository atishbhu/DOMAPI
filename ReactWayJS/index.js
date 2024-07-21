let state = {
  count: 0,
};

function onkeyPressbtn() {
  state.count++;
  buttonReRender();
}

function buttonReRender() {
  const root = document.getElementById("btn-parent");
  root.innerHTML = "";
  const btnComponet = buttonComponent(state.count);
  root.appendChild(btnComponet);
}

function buttonComponent(count) {
  const btn = document.createElement("button");
  btn.innerHTML = `Count is ${count}`;
  btn.setAttribute("onclick", `onkeyPressbtn()`);
  return btn;
}
buttonReRender();

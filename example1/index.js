const todoList = [
  {
    id: 1,
    info: "Hello I am Atish kushwaha",
  },
  {
    id: 2,
    info: "Hello I am Satish Kushwaha",
  },
  {
    id: 3,
    info: "Hello I am Anand Kushwaha",
  },
];

function renderList(todoList) {
  const todoRef = document.querySelector("#todo-list");
  todoRef.innerHTML = "";
  todoList.forEach((element) => {
    const creatChild = document.createElement("li");
    creatChild.classList.add("todo-item");
    creatChild.innerText = element.info;
    todoRef.appendChild(creatChild);
  });
}

const inputRef = document.querySelector("#new-todo");

inputRef.addEventListener("keyup", (e) => {
  if (e.key == "Enter") {
    todoList.push({
      id: todoList.length + 1,
      info: e.target.value,
    });
    renderList(todoList);
    inputRef.value = "";
  }
});

renderList(todoList);

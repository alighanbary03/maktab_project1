const task_color = {
  works: "blue",
  Personal: "green",
  shoppings: "purple",
  healths: "red",
  others: "pink",
};

window.onload = () => {
  tasks = JSON.parse(localStorage.getItem("todos"));
  append_tasks_list2(tasks);
  const box = document.getElementsByClassName("time");
  const directChildren = box.length;
  console.log(directChildren);
  left_today.textContent = `Today you have ${directChildren} tasks`;
  left_add.textContent = `${directChildren}`;
  left_class.textContent = `${directChildren}`;
  const blue_box = document.getElementsByClassName("dot-blue");
  const bluechildren = blue_box.length - 1;
  left_work.textContent = `${bluechildren} tasks`;
  const green_box = document.getElementsByClassName("dot-green");
  const greenchildren = green_box.length - 1;
  left_pers.textContent = `${greenchildren} tasks`;
  const shopping_box = document.getElementsByClassName("dot-purple");
  const purpelchildren = shopping_box.length - 1;
  left_shop.textContent = `${purpelchildren} tasks`;
  const red_box = document.getElementsByClassName("dot-red");
  const redchildren = red_box.length - 1;
  left_heath.textContent = `${redchildren} tasks`;
};

function append_tasks_list2(tasks) {
  const task_list = document.querySelector(".main");
  for (let index in tasks) {
    task_list.appendChild(createelement2(index, tasks[index]));
  }
}

function createelement2(index, task) {
  const node = document.createElement("div");
  node.innerHTML = `
    <div id=${index} class="time2">
    <div class="flexline">
      <p>${task.time1}</p>
      <div class="line"></div>
    </div>
    <div class="task2">
      <p class="task-title">${task.text}</p>
      <p>${task.desc}</p>
      <div class="dot-${task_color[task.category]}"></div>
    </div>
    <div class="flexline">
      <p>${task.time2}</p>
      <div class="line"></div>
  </div>
  </div>`;
  return node;
}

let pers = 0;
let shopi = 0;
let wrk = 0;
let heath = 0;

let left_class = document.getElementById("left_class");
let left_work = document.getElementById("work");
let left_shop = document.getElementById("shoppi");
let left_pers = document.getElementById("personali");
let left_heath = document.getElementById("healthi");
let left_today = document.getElementById("today");
let left_add = document.getElementById("addtasks");

left_work.textContent = `${wrk} task`;
left_shop.textContent = `${shopi} task`;
left_pers.textContent = `${pers} task`;
left_heath.textContent = `${heath} task`;

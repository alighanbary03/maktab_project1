const task_color = {
  works: "blue",
  Personal: "green",
  shopping: "purple",
  healths: "red",
  others: "pink",
};

window.onload = () => {
  tasks = JSON.parse(localStorage.getItem("todos"));
  append_tasks_list1(tasks);
};
console.log("hi");

function append_tasks_list1(tasks) {
  const task_list = document.querySelector("#task_list");
  for (let index in tasks) {
    task_list.appendChild(createelement1(index, tasks[index]));
  }
}

console.log("hi");
function createelement1(index, task) {
  const node = document.createElement("li");
  node.innerHTML = `
    <div class="task-click">
      <p class="task-title">${task.text}</p>
      <p>${task.desc}</p>
      <div class="dot-${task_color[task.category]}"></div>
      <button class="edit" src="edit.png"></button>
      <butto  value="${index}" id="${index}" class="trash" href="script3.js" onclick="delete_task(${index})" > <img src="trash.png"  class="img2"  /> </button></div>
    </div>
    </div> `;
  return node;
}
console.log("hi");

// function append_tasks_list2(tasks) {
//   const task_list = document.querySelector(".main");
//   tasks.forEach(function (task) {
//     task_list.appendChild(createelement2(task));
//   });
// }

// function createelement2(task) {
//   const node = document.createElement("div");
//   node.innerHTML = `
//   <div class="time">
//   <div class="flexline">
//     <p>${task.time}</p>
//     <div class="line"></div>
//   </div>
//   <div class="task">
//     <p class="task-title">${task.text}</p>
//     <p>${task.desc}</p>
//     <div class="dot-${task_color[task.options]}"></div>
//   </div>
// </div>`;
//   return node;
// }
// let task_left = JSON.parse(localStorage.todos).length;
// let left_class = document.getElementById("left_class");
// let pers = 0;
// let shopi = 0;
// let wrk = 0;
// let heath = 0;
// console.log("hi");
function search_items() {
  // main search method
  // find match taks and send them into dom
  const input = document.getElementById("search");
  const value = input.value; // test
  list_of_match = find_tasks(value);
  set_result(list_of_match);
}

function find_tasks(value) {
  // this function only find match values of taks
  let filter_task = {};
  tasks = JSON.parse(localStorage.getItem("todos"));
  if (!value) {
    return tasks;
  }
  for (let key in tasks) {
    //1,2,3
    if (tasks[key].text.includes(value)) {
      filter_task[key] = tasks[key];
    }
  }
  return filter_task;
}

function set_result(list_of_match) {
  const task_list = document.querySelector("#task_list");
  task_list.innerHTML = "";
  append_tasks_list1(list_of_match);
}
// for (let i = 0; i < task_left; i++) {
//   if (JSON.parse(localStorage.todos)[i].category == "shopping") {
//     shopi++;
//   } else if (JSON.parse(localStorage.todos)[i].category == "works") {
//     wrk++;
//   } else if (JSON.parse(localStorage.todos)[i].category == "Personal") {
//     pers++;
//   } else if (JSON.parse(localStorage.todos)[i].category == "healths") {
//     heath++;
//   }
// }

// let left_work = document.getElementById("work");
// let left_shop = document.getElementById("shoppi");
// let left_pers = document.getElementById("personali");
// let left_heath = document.getElementById("healthi");
// let left_today = document.getElementById("today");

// left_work.textContent = `${wrk} task`;
// left_shop.textContent = `${shopi} task`;
// left_pers.textContent = `${pers} task`;
// left_heath.textContent = `${heath} task`;
// left_today.textContent = `Today you have ${task_left} tasks`;

// $(".mainsearch").hide();

function remove_butten() {
  const input = document.getElementById("search");
  input.value = "";
  const value = input.value;
  list_of_match = find_tasks(value);
  set_taks_result(list_of_match);
}

// let toopi = document.getElementById("searchicon");

let sol = document.querySelector(".task-click");
top.addEventListener("click", function () {
  sol.style.visibility = "hidden";
});

function del(Element, value) {
  console.log(Element.parentNode);
  Element.parentNode.remove();
  localStorage.removeItem(`todos${value}`);
}

function remove_btn() {
  const input = document.getElementById("search");
  input.value = "";
  location.reload();
}

function delete_task(index) {
  tasks = JSON.parse(localStorage.getItem("todos"));
  delete tasks[index];
  localStorage.setItem("todos", JSON.stringify(tasks));
  location.reload();
}

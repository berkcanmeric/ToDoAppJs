// UI variables

const form = document.querySelector("form");
const input = document.querySelector("#txtTaskName");
const btnDeleteAll = document.querySelector("#btnDeleteAll");
const taskList = document.querySelector("#task-list");

//call event listeners
eventListeners();

function eventListeners() {
  //submit event
  form.addEventListener("submit", addNewItem);

  //delete an item
  taskList.addEventListener("click", deleteItem);

  //delete all items
  btnDeleteAll.addEventListener("click", deleteAllItems);
}

//delete all items
function deleteAllItems(e) {
  //one of the ways to do it

  if (confirm("Do you want to delete All Items?")) {
    taskList.innerHTML = "";

    //   taskList.forEach(function (item) {
    //     if (item.nodeType === 1) {
    //       item.remove();
    //     }
    //   });
  }
  e.preventDefault;
}
function deleteItem(e) {
  if (e.target.className === "fas fa-times") {
    if (confirm("Do you want to delete this item?")) {
      e.target.parentElement.parentElement.remove();
    }
  }
  e.preventDefault();
}

//add new item
function addNewItem(e) {
  if (input.value === "") {
    alert("Add new item");
  }
  const li = document.createElement("li");
  li.className = "list-group-item list-group-item-secondary";

  li.appendChild(document.createTextNode(input.value));

  const a = document.createElement("a");
  a.classList = "delete-item float-right";
  a.setAttribute("href", "#");
  a.innerHTML = '<i class="fas fa-times"></i>';

  li.appendChild(a);
  taskList.appendChild(li);

  input.value = "";

  e.preventDefault();
}

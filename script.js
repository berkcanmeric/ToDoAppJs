// UI variables

const form = document.querySelector("form");
const input = document.querySelector("#txtTaskName");
const btnDeleteAll = document.querySelector("#btnDeleteAll");
const taskList = document.querySelector("#task-list");
const items = ["item 1", "item 2", "item 3"];

//load items
loadItems();

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

function loadItems(e) {
  items.forEach(function (item) {
    createItem(item);
  });
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

function createItem(text) {
  //create li
  const li = document.createElement("li");
  li.className = "list-group-item list-group-item-secondary";
  li.appendChild(document.createTextNode(text));

  //create a
  const a = document.createElement("a");
  a.classList = "delete-item float-right";
  a.setAttribute("href", "#");
  a.innerHTML = '<i class="fas fa-times"></i>';

  li.appendChild(a);
  //add a to li
  //add li to ul
  taskList.appendChild(li);
}

//add new item
function addNewItem(e) {
  if (input.value === "") {
    alert("Add new item");
  }
  //create Item
  createItem(input.value);
  //clear input
  input.value = "";

  e.preventDefault();
}

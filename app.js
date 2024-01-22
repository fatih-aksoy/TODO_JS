let addTodoButton = document.getElementById("addTodo");

let todoContainer = document.getElementById("todoContainer");

let inputField = document.getElementById("inputField");

addTodoButton.addEventListener("click", function () {
  const paragraph = document.createElement("p");
  paragraph.classList.add("paragraph-styling");
  paragraph.innerText = inputField.value;
  todoContainer.appendChild(paragraph);
  inputField.value = "";

  //! ustunu cizme islemi
  paragraph.addEventListener("click", function () {
    paragraph.style.textDecoration = "line-through";
  });

  // ! silme islemi
  paragraph.addEventListener("dblclick", function () {
    todoContainer.removeChild(paragraph);
  });
});

// ! 1. Önce button, div(todoContainer) ve input taglerini id lerinden yakaladik.

const input = document.querySelector("input"); // Selecciona el campo de texto para ingresar tareas.
const addBtn = document.querySelector(".btn-add"); // Selecciona el botón para agregar tareas.
const ul = document.querySelector("ul"); // Selecciona la lista donde se mostrarán las tareas.

addBtn.addEventListener("click", (e) => {
  e.preventDefault(); // Evita que la página se recargue al hacer clic.

  const text = input.value; 

  if (text !== "") { // Agrega una nueva tarea.
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.textContent = text; 

    li.appendChild(p); 
    li.appendChild(addCompleteBtn()); 
    li.appendChild(addDeleteBtn()); 
    ul.appendChild(li); 

    input.value = ""; 
    empty.style.display = "none"; 
  }
});
// Elimina la tarea de la lista.
function addDeleteBtn() {
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X"; 
  deleteBtn.className = "btn-delete";

  deleteBtn.addEventListener("click", (e) => {
    const item = e.target.parentElement; 
    ul.removeChild(item); 

    if (document.querySelectorAll("li").length === 0) { 
      empty.style.display = "block";
    }
  });

  return deleteBtn;
}
// Botón para marcar tareas como completadas.
function addCompleteBtn() {
  const completeBtn = document.createElement("button");
  completeBtn.textContent = "✔"; 
  completeBtn.className = "btn-complete";

  completeBtn.addEventListener("click", (e) => {
    const item = e.target.parentElement; 
    const text = item.querySelector("p");

    if (item.classList.contains("completed")) { 
      item.classList.remove("completed");
      text.style.textDecoration = "none";
    } else { 
      item.classList.add("completed");
      text.style.textDecoration = "line-through";
    }
  });

  return completeBtn;
}

const input = document.getElementById("input");
const btn = document.getElementById("btn");
const todo = document.getElementById("todo");
function local(){
    let todos = todo.innerHTML
    localStorage.setItem('todos', todos)
}
btn.addEventListener( 'click', add);
function add() {
  let inputValue = input.value;
  const paragraph = document.createElement("p");
  paragraph.textContent = inputValue;
  todo.prepend(paragraph);
  if(inputValue === ''){
    paragraph.style.border = "none";
      alert('Введите что-нибудь, поле не должно быть пустым!')
  }else{
    paragraph.style.borderBottom = "1px solid blue";
  }
  paragraph.style.fontSize = "30px";
  paragraph.style.color = "turquoise";
  paragraph.addEventListener("dblclick", function () {
    paragraph.style.display = "none";
    local()
  });
    paragraph.addEventListener("click", function () {
        paragraph.classList.toggle('line')
        local()
    });
}
if(localStorage.getItem('todos')){
    todo.innerHTML = localStorage.getItem('todos')
}

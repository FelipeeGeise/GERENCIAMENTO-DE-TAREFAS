function adcionarTarefa() {
  let valorDoInput = document.querySelector("input").value;

  let li = document.createElement("li");

  li.innerHTML =
    valorDoInput +
    '<span onclick="removerTarefa(this)"><div>Concluído</div></span>';

  document.querySelector("ul").appendChild(li);

  document.querySelector("input").value = ""; //zerar meu input

  
    
    
    let checkbox = document.createElement("input"); //
    checkbox.type = "checkbox"; //
    checkbox.onclick = toggleTask; //

   
  
  
  
    li.appendChild(checkbox);//
    li.appendChild(document.createTextNode(taskInput.value));//
    taskList.appendChild(li);//
  
    taskInput.value = '';

 
}

function removerTarefa(li) {
  li.parentElement.remove();
}


function toggleTask(event) { 
const li = event.target.parentNode; 
li.classList.toggle('completed'); }



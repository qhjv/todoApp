const input = document.querySelector(".todo-input");
const button = document.querySelector(".todo-button");
const listTodo = document.querySelector(".todo-list");



button.addEventListener("click" ,function(e){
    e.preventDefault(); 

    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    const newTodo = document.createElement('li');
    if(input.value){
        newTodo.innerText = input.value;
        newTodo.classList.add('todo-item');
        todoDiv.appendChild(newTodo);


        const completedButton = document.createElement('button');
        completedButton.innerHTML = '✔️';
        completedButton.classList.add("btnCompleted");
        todoDiv.appendChild(completedButton);


        const trashButton = document.createElement('button');
        trashButton.innerHTML ='✖️';
        trashButton.classList.add("btnTrash");
        todoDiv.appendChild(trashButton);


        listTodo.appendChild(todoDiv);
        input.value = "";
    }else{
        alert("Vui lòng không để trống!!!")
    }
});
listTodo.addEventListener("click" , function(e){
    const item = e.target;
    //delete
    if (item.classList[0] === "btnTrash"){
        const todo = item.parentElement;
        todo.classList.add("fall");
        todo.addEventListener("transitionend",function(){
            todo.remove();
            }
        );}
    // check
    if (item.classList[0] === "btnCompleted"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
});





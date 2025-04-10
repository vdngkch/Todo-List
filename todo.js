let todo=[];

document.querySelector(".addbtn").addEventListener("click",addtodo);
 

function addtodo(){
    const input=document.querySelector(".input")
    const inputvalue=input.value;

    const date=document.querySelector(".date")
    const dueDate=date.value;
    

    todo.push({
        name:inputvalue,
        dueDate:dueDate
    });
    
    input.value='';
    render();
}

render();
function render(){
    let todoHTML="";

    for(let i=0;i<todo.length;i++){
        let todoList = todo[i];
        const name = todoList.name;
        const dueDate=todoList.dueDate;
        let HTML =`
         <div>${name}</div>
         <div>${dueDate}</div>
    <button onclick="
        todo.splice(${i},1);
        render();
    " class="delbtn">Delete</button>
    `;
        todoHTML += HTML;
    }
    document.querySelector(".output").innerHTML=todoHTML;
}

["why doesn't she love me","oh fuck my life"].forEach(function(value){
    console.log(value)
})
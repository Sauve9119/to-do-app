 function deleteTodo(){
            const text = document.querySelector("div");
            text.remove();
        } 
    function addTodo() {
       const InputEl = document.querySelector("input");
       const value = InputEl.value;
       const text = document.createElement("div");
       text.innerHTML = "<div>"+ value+" </div> <button onclick = 'deleteTodo()'> delete </button>";
       document.querySelector("body").appendChild(text);
    }

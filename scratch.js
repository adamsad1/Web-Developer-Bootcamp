window.setTimeout(function () {
    var todos = []

    var input = prompt("What would you like to do?");

    while (input !== "quit") {
        if (input === "list") {
            listTodos();
        } else if (input === "new") {
            addTodo();
        } else if (input === "delete") {
            deleteTodo();
        }
        input = prompt("What would you like to do?");
    }

    function listTodos() {
        console.log("**********");
        todos.forEach(function (todo, index) {
            console.log(index + ": " + todo);
        })
        console.log("**********");
    }

    function addTodo() {
            var newTodo = prompt("Enter new todo");
            todos.push(newTodo);
            console.log(newTodo + " added to list");
    }

    function deleteTodo() {
            var targetTodo = prompt("Enter todo to delete");
            if (targetTodo >= todos.length || targetTodo < 0) {
                console.log("Not a valid todo");
            } else {
                todos.splice(targetTodo);
                console.log("Todo " + targetTodo + " deleted");
            }
    }
    
    console.log("Okay, you quit the app");
}, 500);
window.setTimeout(function() {
    var todos = []

    var input = prompt("What would you like to do?");

    while(input !== "quit") {
        if(input === "list") {
            console.log("**********");
            for(var i = 0; i < todos.length; i++){
                console.log(i + ": " + todos[i]);
            }
            console.log("**********");
        } else if (input === "new") {
            var newTodo = prompt("Enter new todo");
            todos.push(newTodo);
            console.log(newTodo + " added to list");
        } else if (input === "delete") {
            var deleteTodo = prompt("Enter todo to delete");
            if(deleteTodo >= todos.length || deleteTodo < 0) {
                console.log("Not a valid todo");
            } else {
                todos.splice(deleteTodo);
                console.log("Todo " + deleteTodo + " deleted");
            }
        }
        input = prompt("What would you like to do?");
    }

    console.log("Okay, you quit the app");
}, 500);
// Code goes here

var toDoList = {
  todos: [],
  displayTodos: function() {
    console.log('My to dos:');
    if (this.todos.length === 0 ) {
      console.log("your list is empty")
    } else {
      for (var i = 0; i < this.todos.length; i++) {
      
      if(this.todos[i].completed === true) {
        console.log('(x)', this.todos[i].todoText);
      } else {
        console.log('()', this.todos[i].todoText);
      }
      
      }
    }
  },
  addToDo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },
  changeToDo: function(position, todoText) {
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },
  deleteToDo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  },
  toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos(" ");
  },
  toggleAll: function() {
    var totalTodos = this.todos.length;
    var completedTodos = 0;
  }
}

var handlers = {
  displayTodos: function() {
    toDoList.displayTodos();
  },
  toggleAll: function() {
    toDoList.toggleAll();
  },
  addTodo: function() {
    var addTodoTextInput = document.getElementById('addTodoTextInput');
    toDoList.addToDo(addTodoTextInput.value);
    addTodoTextInput.value = '';
  },
  changeTodo: function() {
    var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
    var changeTodoTextInput = document.getElementById('changeTodoTextInput');
    toDoList.changeToDo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
    changeTodoPositionInput.value = '';
    changeTodoTextInput.value = '';
  },
  deleteTodo: function() {
    var deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
    toDoList.deleteToDo(deleteTodoPositionInput.valueAsNumber);
    deleteTodoPositionInput.value = '';
  },
  toggleCompleted: function() {
    var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
    toDoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    toggleCompletedPositionInput.value = '';
  }
}

var view = {
  displayTodos: function() {
    var todosUl = document.querySelector('ul');
    todosUl.innerHTML = '';
    for(var i = 0; i < toDoList.todos.length; i++) {
      
      var todoLi = document.createElement('li');
      todoLi.textContent = toDoList.todos[i].todoText;
      todosUl.appendChild(todoLi);
    }
  }
};






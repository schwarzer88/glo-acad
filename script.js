"use strict"

const todoControl = document.querySelector('.todo-control'),
    headerInput = document.querySelector('.header-input'),
    todoList = document.querySelector('.todo-list'),
    todoCompleted = document.querySelector('.todo-completed');

let todoData = [];


const render = function() {

    todoList.textContent = '';
    todoCompleted.textContent = '';
    todoData.forEach(function(item) {
        let localValue = JSON.stringify(item);
        localStorage.setItem(item.value, localValue);

        const li = document.createElement('li');
        li.classList.add('todo-item');

        li.innerHTML = `<span class="text-todo">${item.value}</span>` +
            '<div class="todo-buttons">' +
            '<button class="todo-remove"></button>' +
            '<button class="todo-complete"></button>' +
            '</div>';

        if (item.completed) {
            todoCompleted.append(li);
        } else {
            todoList.append(li);
        }

        const btnTodoCompleted = li.querySelector('.todo-complete');
        btnTodoCompleted.addEventListener('click', function() {
            item.completed = !item.completed;
            render();
        })

        const todoRemove = li.querySelector('.todo-remove');
        todoRemove.addEventListener('click', function() {
            todoData.splice(item, 1);
            localStorage.removeItem(item.value);
            console.log(item);
            render();
        })
    });
};


todoControl.addEventListener('submit', function(event) {
    event.preventDefault();
    if (headerInput.value.trim() === '') {
        alert('Введите ваши планы');
    } else {
        const newTodo = {
            value: headerInput.value.trim(),
            completed: false,
        };
        headerInput.value = '';
        todoData.push(newTodo);

        render()
    }

});

for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    let item = JSON.parse(localStorage.getItem(key));
    todoData.push(item);
}



render();
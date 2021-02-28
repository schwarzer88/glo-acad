'use strict';

class Todo {
    constructor(form, input, todoList, todoCompleted) {
        this.form = document.querySelector(form);
        this.input = document.querySelector(input);
        this.todoList = document.querySelector(todoList);
        this.todoCompleted = document.querySelector(todoCompleted);
        this.todoData = new Map(JSON.parse(localStorage.getItem('todoList')));
    }

    addToStorage() {
        localStorage.setItem('todoList', JSON.stringify([...this.todoData]));
    }

    render() {
        this.todoList.textContent = '';
        this.todoCompleted.textContent = '';
        this.todoData.forEach(this.createItem);
        this.addToStorage();
    }

    createItem = (todo) => {
        const li = document.createElement('li');
        li.classList.add('todo-item');
        li.key = todo.key;
        li.insertAdjacentHTML('beforeend', `
        <span class="text-todo">${todo.value}</span>
        <div class="todo-buttons">
            <button class="todo-remove" key="${todo.key}"></button>
            <button class="todo-complete" key="${todo.key}"></button>
        </div>
        `);
        if (todo.complated) {
            this.todoCompleted.append(li);
        } else {
            this.todoList.append(li);
        }
    }

    addTodo(e) {
        e.preventDefault();
        if (this.input.value.trim()) {
            const newTodo = {
                value: this.input.value,
                complated: false,
                key: this.generateKey(),
            }
            this.todoData.set(newTodo.key, newTodo);
            this.render();
        } else {
            alert('Введите ваше дело');
        };
    };

    generateKey() {
        return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    }

    deleteItem(target) {
        this.todoData.delete(target.attributes[1].nodeValue);
    }

    completedItem(target) {
        this.todoData.get(target.attributes[1].nodeValue).complated = !this.todoData.get(target.attributes[1].nodeValue).complated;
    }

    handler() {
        this.todoList.addEventListener('click', (e) => {
            let target = e.target;
            if (target.classList.contains('todo-remove')) {
                this.deleteItem(target);
            } else if (target.classList.contains('todo-complete')) {
                this.completedItem(target)
            }
            this.render();
        });
        this.todoCompleted.addEventListener('click', (e) => {
            let target = e.target;
            if (target.classList.contains('todo-remove')) {
                this.deleteItem(target);
            } else if (target.classList.contains('todo-complete')) {
                this.completedItem(target)
            }
            this.render();
        });
    };





    init() {
        this.form.addEventListener('submit', this.addTodo.bind(this));
        let del = document.querySelector('.todo-remove');
        this.handler();
        this.render();
    }
}

const todo = new Todo('.todo-control', '.header-input', '.todo-list', '.todo-completed');

todo.init();
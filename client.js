const form = document.getElementById('todo-form');
const input = document.getElementById('todo-item');
const ul = document.getElementById('todo-list');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const todoItem = input.value;
    if (todoItem.trim() !== '') {
        fetch('/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: `todoItem=${todoItem}`
        })
        .then(() => {
            input.value = '';
            ul.innerHTML += `<li>${todoItem}</li>`;
        });
    }
});
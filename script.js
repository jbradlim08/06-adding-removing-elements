const input = document.getElementById('item-input');
const form = document.getElementById('form');
const list = document.getElementById('list');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const newInput = input.value;
    
    const newItem = document.createElement('li');
    newItem.textContent = newInput;

    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-btn';
    deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>'; // trash icon

    deleteButton.addEventListener('click', () => {
        list.removeChild(newItem);
    })

    newItem.appendChild(deleteButton);

    list.appendChild(newItem);


})
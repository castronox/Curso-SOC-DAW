// Array para almacenar los elementos
let items = [];
// Función para obtener los elementos desde el almacenamiento local
function getItemsFromLocalStorage() {
    const itemsJson = localStorage.getItem('items');
    if (itemsJson) {
        items = JSON.parse(itemsJson);
    }
}

// Función para guardar los elementos en el almacenamiento local
function saveItemsToLocalStorage() {
    const itemsJson = JSON.stringify(items);
    localStorage.setItem('items', itemsJson);
}



// Referencias a los elementos del DOM
const itemList = document.getElementById('item-list');
const itemForm = document.getElementById('item-form');
const itemNameInput = document.getElementById('item-name');
const itemDescriptionInput = document.getElementById('item-description');
const updateButton = document.getElementById('update-button');
const cancelButton = document.getElementById('cancel-button');
const searchInput = document.getElementById('search-input');
// Función para mostrar los elementos en la lista
function renderItems() {
    itemList.innerHTML = '';

    const searchTerm = searchInput.value.toLowerCase();

    const filteredItems = items.filter(item => {
        const itemName = item.name.toLowerCase();
        const itemDescription = item.description.toLowerCase();
        return itemName.includes(searchTerm) || itemDescription.includes(searchTerm);
    });

    items.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
        <strong>${item.name}</strong> - ${item.description}
        <button onclick="editItem(${index})">Editar</button>
        <button onclick="deleteItem(${index})">Eliminar</button>
        `;
        itemList.appendChild(li);
    });
}



// Función para agregar un elemento
function addItem(event) {
    event.preventDefault();

    const name = itemNameInput.value;
    const description = itemDescriptionInput.value;

    if (name && description) {
        const newItem = { name, description };
        items.push(newItem);
        saveItemsToLocalStorage();
        renderItems();
        itemForm.reset();
    }
}

// Función para editar un elemento
function editItem(index) {
    const item = items[index];
    itemNameInput.value = item.name;
    itemDescriptionInput.value = item.description;
    updateButton.style.display = 'inline-block';
    cancelButton.style.display = 'inline-block';

    // Actualizar el elemento al hacer clic en el botón "Actualizar"
    updateButton.onclick = function () {
        item.name = itemNameInput.value;
        item.description = itemDescriptionInput.value;
        renderItems();
        itemForm.reset();
        updateButton.style.display = 'none';
        cancelButton.style.display = 'none';
    };

    // Cancelar la edición al hacer clic en el botón "Cancelar"
    cancelButton.onclick = function () {
        itemForm.reset();
        updateButton.style.display = 'none';
        cancelButton.style.display = 'none';
    };
}

// Función para eliminar un elemento
function deleteItem(index) {
    items.splice(index, 1);
    saveItemsToLocalStorage();
    renderItems();
}

// Evento de envío del formulario para agregar un elemento
itemForm.addEventListener('submit', addItem);

// Renderizar los elementos iniciales
getItemsFromLocalStorage();
renderItems();


document.addEventListener('DOMContentLoaded', () => {
    const itemForm = document.getElementById('item-form');
    const itemInput = document.getElementById('item-input');
    const itemList = document.getElementById('item-list');

    // Event Listener para adicionar item
    itemForm.addEventListener('submit', (e) => {
        e.preventDefault();
        addItem(itemInput.value);
        itemInput.value = '';
        itemInput.focus();
    });

    function addItem(itemName) {
        if (itemName.trim() === '') return;

        const li = document.createElement('li');
        
        // Texto do item
        const itemText = document.createElement('span');
        itemText.textContent = itemName;
        itemText.addEventListener('click', toggleComplete);

        // Botões
        const itemButtons = document.createElement('div');
        itemButtons.classList.add('item-buttons');

        // Botão Completar
        const completeBtn = document.createElement('button');
        completeBtn.textContent = 'Concluir';
        completeBtn.classList.add('complete-btn');
        completeBtn.addEventListener('click', toggleComplete);

        // Botão Remover
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remover';
        removeBtn.classList.add('remove-btn');
        removeBtn.addEventListener('click', removeItem);

        itemButtons.appendChild(completeBtn);
        itemButtons.appendChild(removeBtn);

        li.appendChild(itemText);
        li.appendChild(itemButtons);
        
        itemList.appendChild(li);
    }

    function toggleComplete(e) {
        const item = e.target.closest('li');
        const itemText = item.querySelector('span');
        itemText.classList.toggle('completed');
    }

    function removeItem(e) {
        const item = e.target.closest('li');
        
        // Feedback visual de remoção
        item.classList.add('removing');
        
        // Espera a animação terminar para remover do DOM
        item.addEventListener('transitionend', () => {
            item.remove();
        });
    }
});

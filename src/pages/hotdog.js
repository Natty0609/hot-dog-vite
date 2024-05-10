export const toppings = [
    { name: 'Hořčice', price: 5, selected: false },
    { name: 'Kečup', price: 5, selected: false },
    { name: 'Cibule', price: 5, selected: false },
    { name: 'Okurka', price: 5, selected: false },
    { name: 'Paprika', price: 5, selected: false },
    { name: 'Rajče', price: 5, selected: false },
    { name: 'Chilli', price: 5, selected: false },
    { name: 'Sýr', price: 10, selected: false },
    { name: 'Slanina', price: 10, selected: false },
];

export function renderToppings() {
    const toppingsContainer = document.getElementById('toppings-container');
    toppingsContainer.innerHTML = '';

    toppings.forEach((topping, index) => {
        const toppingElement = document.createElement('div');
        toppingElement.classList.add('topping');
        if (topping.selected) {
            toppingElement.classList.add('topping--selected');
        }

        toppingElement.addEventListener('click', () => {
            toggleTopping(index);
            renderToppings();
        });

        const nameHeader = document.createElement('h3');
        nameHeader.textContent = topping.name;

        const priceParagraph = document.createElement('p');
        priceParagraph.textContent = `${topping.price} Kč`;

        toppingElement.appendChild(nameHeader);
        toppingElement.appendChild(priceParagraph);
        toppingsContainer.appendChild(toppingElement);
    });
}

export function toggleTopping(index) {
    toppings[index].selected = !toppings[index].selected;
}
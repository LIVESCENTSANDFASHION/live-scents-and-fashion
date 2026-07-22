let cart = [];

document.querySelectorAll('.add-cart').forEach(button => {
    button.addEventListener('click', () => {
        const name = button.dataset.name;
        const price = button.dataset.price;

        cart.push({ name, price });

        alert(`${name} added to cart!`);
    });
});
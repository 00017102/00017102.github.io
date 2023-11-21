class CartProduct{
    constructor(title, price, imgSrc, quantity = 1){
        this.title = title;
        this.price = price;
        this.imgSrc = imgSrc;
        this.quantity = quantity;
    }
    formatPrice() {
        return `${this.price} sum`;
    }
}

const cartProducts = [
    new CartProduct("Clinkers", "400 000", "https://img.taste.com.au/hbNtzI2Q/taste/2021/08/clinkers-cake-173208-2.jpg"),
    new CartProduct("Potato Cake","350 000", "https://assets.bonappetit.com/photos/5f7f4a04ba63e7584fca0518/1:1/w_2560%2Cc_limit/Dessert-Sweet-Potato-Cake-Salted-Cream-Cheese.jpg"),
    new CartProduct("Strawberry Cheesecake", "50 000", "https://sugarspunrun.com/wp-content/uploads/2023/06/Strawberry-cheesecake-recipe-6-of-8.jpg"),
]


function createCart(container, cartTemplate, cartItems){
    cartItems.forEach(cartItem => {
        const item = cartTemplate.cloneNode(true);
        item.id = ''
        item.querySelector('.image').src = cartItem.imgSrc;
        item.querySelector('.name').textContent = cartItem.title;
        item.querySelector('.price').textContent = cartItem.price * cartItem.quantity;
        container.appendChild(item);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('cartItems');
    const template = document.getElementById('cartTemplate');
    createCart(container, template, cartProducts);
});
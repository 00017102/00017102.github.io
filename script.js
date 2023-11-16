class TopProduct{
    constructor(title, description, price, imgSrc){
        this.title = title;
        this.description = description;
        this.price = price;
        this.imgSrc = imgSrc;
    }
    formatPrice() {
        return `${this.price} sum`;
    }
}

// Creating instances
const topProducts = [
    new TopProduct("Clinkers", "Some description about the cake with information of what was it made of etc.", "400 0000", "https://img.taste.com.au/hbNtzI2Q/taste/2021/08/clinkers-cake-173208-2.jpg"),
    new TopProduct("Potato Cake", "Some description about the cake with information of what was it made of etc.", "350 0000", "https://assets.bonappetit.com/photos/5f7f4a04ba63e7584fca0518/1:1/w_2560%2Cc_limit/Dessert-Sweet-Potato-Cake-Salted-Cream-Cheese.jpg"),
    new TopProduct("Strawberry Cheesecake", "Some description about the dessert with information of what was it made of etc.", "50 000", "https://sugarspunrun.com/wp-content/uploads/2023/06/Strawberry-cheesecake-recipe-6-of-8.jpg"),
    new TopProduct("Nake Cake", "Some description about the cake with information of what was it made of etc.", "560 0000", "https://preppykitchen.com/wp-content/uploads/2022/05/Naked-Cake-Recipe-Card.jpg"),
    new TopProduct("Chocolate Puff", "Some description about the bakery with information of what was it made of etc.", "20 0000", "https://www.marcellinaincucina.com/wp-content/uploads/2022/04/chocolate-pastry-puffs-5-2.jpg"),
    new TopProduct("Classic cheescake", "Some description about the dessert with information of what was it made of etc.", "60 000", "https://img.taste.com.au/3kqM4rqu/w720-h480-cfill-q80/taste/2016/11/classic-baked-vanilla-cheesecake-53202-1.jpeg"),
    new TopProduct("Black Forest", "Some description about the cake with information of what was it made of etc.", "700 0000", "https://livforcake.com/wp-content/uploads/2017/07/black-forest-cake-thumb.jpg"),
    new TopProduct("Forest Cake", "Some description about the cake with information of what was it made of etc.", "502 140","https://preppykitchen.com/wp-content/uploads/2018/04/Funfetti-cake-recipe-new.jpg"),
    new TopProduct("Eggless Black Forest", "Some description about the bakery with the information of what was it made of etc.", "40 000","https://j6e2i8c9.rocketcdn.me/wp-content/uploads/2021/05/Eggless-Black-forest-Pastry-recipe-1.jpg"),
    new TopProduct("Choux", "Some description about the bakery with information of what was it made of etc.", "15 0000","https://sugarspunrun.com/wp-content/uploads/2023/02/choux-pastry-recipe-1-of-1-2.jpg")
];



function createTopProducts() {
    const topProductsContainer = document.querySelector('.top-products-grid');
    const gridItem = document.getElementById('template')
    topProducts.forEach(product => {
        const productCard = gridItem.cloneNode(true);
        productCard.id = '';

        // Update the content
        productCard.querySelector('.item-img').src = product.imgSrc;
        productCard.querySelector('.card-title').textContent = product.title;
        productCard.querySelector('.item-description').textContent = product.description;
        productCard.querySelector('.item-price').textContent = product.formatPrice();

        // Update button event listeners
        productCard.querySelector('.add-button').onclick = function() { swapButton(this); };
        productCard.querySelector('.decrement-button').onclick = function() { changeQuantity(this, -1); };
        productCard.querySelector('.increment-button').onclick = function() { changeQuantity(this, 1); };

        // Append the card to the container
        topProductsContainer.appendChild(productCard);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    createTopProducts();
});

function swapButton(element){
    element.style.display = 'none';
    element.nextElementSibling.style.display = 'flex';
}

function changeQuantity(element, delta){
    let quantityModifier = element.parentNode;
    let quantityDisplay = quantityModifier.querySelector('.quantity');
    let quantity = parseInt(quantityDisplay.textContent);

    quantity += delta;

    if(quantity < 1){
        quantity = 1;
        quantityModifier.style.display = 'none';
        quantityModifier.previousElementSibling.style.display = 'inline-block';
    }
    quantityDisplay.textContent = quantity;
}
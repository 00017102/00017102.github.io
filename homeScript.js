//product class
class Product{
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

//creating instances
const topProducts = [
    new Product("Brauni", "Some description about the bakery with information of what was it made of etc.", "15 000", "https://cdn.cakelab.uz/products/thumbs/1_1681377321.jpg"),
    new Product("Clinkers", "Some description about the cake with information of what was it made of etc.", "400 000", "https://img.taste.com.au/hbNtzI2Q/taste/2021/08/clinkers-cake-173208-2.jpg"),
    new Product("Potato Cake", "Some description about the cake with information of what was it made of etc.", "350 000", "https://assets.bonappetit.com/photos/5f7f4a04ba63e7584fca0518/1:1/w_2560%2Cc_limit/Dessert-Sweet-Potato-Cake-Salted-Cream-Cheese.jpg"),
    new Product("Strawberry Cheesecake", "Some description about the dessert with information of what was it made of etc.", "50 000", "https://sugarspunrun.com/wp-content/uploads/2023/06/Strawberry-cheesecake-recipe-6-of-8.jpg"),
    new Product("Nake Cake", "Some description about the cake with information of what was it made of etc.", "560 000", "https://preppykitchen.com/wp-content/uploads/2022/05/Naked-Cake-Recipe-Card.jpg"),
    new Product("Chocolate Puff", "Some description about the bakery with information of what was it made of etc.", "20 000", "https://www.marcellinaincucina.com/wp-content/uploads/2022/04/chocolate-pastry-puffs-5-2.jpg"),
    new Product("Classic cheescake", "Some description about the dessert with information of what was it made of etc.", "60 000", "https://img.taste.com.au/3kqM4rqu/w720-h480-cfill-q80/taste/2016/11/classic-baked-vanilla-cheesecake-53202-1.jpeg"),
    new Product("Black Forest", "Some description about the cake with information of what was it made of etc.", "700 000", "https://livforcake.com/wp-content/uploads/2017/07/black-forest-cake-thumb.jpg"),
    new Product("Forest Cake", "Some description about the cake with information of what was it made of etc.", "502 140","https://preppykitchen.com/wp-content/uploads/2018/04/Funfetti-cake-recipe-new.jpg"),
    new Product("Eggless Black Forest", "Some description about the bakery with the information of what was it made of etc.", "40 000","https://j6e2i8c9.rocketcdn.me/wp-content/uploads/2021/05/Eggless-Black-forest-Pastry-recipe-1.jpg"),
    new Product("Choux", "Some description about the bakery with information of what was it made of etc.", "15 000","https://sugarspunrun.com/wp-content/uploads/2023/02/choux-pastry-recipe-1-of-1-2.jpg")
];

const cakes = [
    new Product("Clinkers", "Some description about the cake with information of what was it made of etc.", "400 000", "https://img.taste.com.au/hbNtzI2Q/taste/2021/08/clinkers-cake-173208-2.jpg"),
    new Product("Potato Cake", "Some description about the cake with information of what was it made of etc.", "350 000", "https://assets.bonappetit.com/photos/5f7f4a04ba63e7584fca0518/1:1/w_2560%2Cc_limit/Dessert-Sweet-Potato-Cake-Salted-Cream-Cheese.jpg"),
    new Product("Nake Cake", "Some description about the cake with information of what was it made of etc.", "560 000", "https://preppykitchen.com/wp-content/uploads/2022/05/Naked-Cake-Recipe-Card.jpg"),
    new Product("Black Forest", "Some description about the cake with information of what was it made of etc.", "700 000", "https://livforcake.com/wp-content/uploads/2017/07/black-forest-cake-thumb.jpg"),
    new Product("Forest Cake", "Some description about the cake with information of what was it made of etc.", "502 140","https://preppykitchen.com/wp-content/uploads/2018/04/Funfetti-cake-recipe-new.jpg")
]

const desserts = [
    new Product("Strawberry Cheesecake", "Some description about the dessert with information of what was it made of etc.", "50 000", "https://sugarspunrun.com/wp-content/uploads/2023/06/Strawberry-cheesecake-recipe-6-of-8.jpg"),
    new Product("Classic cheescake", "Some description about the dessert with information of what was it made of etc.", "60 000", "https://img.taste.com.au/3kqM4rqu/w720-h480-cfill-q80/taste/2016/11/classic-baked-vanilla-cheesecake-53202-1.jpeg")
]

const bakeries = [
    new Product("Brauni", "Some description about the bakery with information of what was it made of etc.", "15 000", "https://cdn.cakelab.uz/products/thumbs/1_1681377321.jpg"),
    new Product("Chocolate Puff", "Some description about the bakery with information of what was it made of etc.", "20 000", "https://www.marcellinaincucina.com/wp-content/uploads/2022/04/chocolate-pastry-puffs-5-2.jpg"),
    new Product("Eggless Black Forest", "Some description about the bakery with the information of what was it made of etc.", "40 000","https://j6e2i8c9.rocketcdn.me/wp-content/uploads/2021/05/Eggless-Black-forest-Pastry-recipe-1.jpg"),
    new Product("Choux", "Some description about the bakery with information of what was it made of etc.", "15 000","https://sugarspunrun.com/wp-content/uploads/2023/02/choux-pastry-recipe-1-of-1-2.jpg")
]

const cookies = [

]

function createMenuItems(){
    const menuGrid = document.querySelector('.menu-grid')
    const gridItem = document.getElementById('template')
    
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    //map string passed to category array
    const categoryMap = {
        'cakes': cakes,
        'desserts': desserts,
        'bakeries': bakeries,
        'cookies': cookies
    };
    //map string passed to button
    const buttonMap = {
        'cakes': document.getElementById('btnCakes'),
        'desserts': document.getElementById('btnDesserts'),
        'bakeries': document.getElementById('btnBakeries'),
        'cookies': document.getElementById('btnCookies')
    }
    //check if category is passed and exists in the Map
    if (category && categoryMap[category]){
        updateMenuGrid(menuGrid, gridItem, categoryMap[category], buttonMap[category]);
    }
    //if category is not passed, i.e. it is novigate through navigation bar, show cakes
    else{
        updateMenuGrid(menuGrid, gridItem, cakes, document.getElementById('btnCakes'));
    }
    
    document.getElementById('btnCakes').addEventListener('click', function(){
        //with "this" pass the button on which user clicked
        updateMenuGrid(menuGrid, gridItem, cakes, this);
    });
    document.getElementById('btnDesserts').addEventListener('click', function(){
        updateMenuGrid(menuGrid, gridItem, desserts, this);
    });
    document.getElementById('btnBakeries').addEventListener('click', function(){
        updateMenuGrid(menuGrid, gridItem, bakeries, this);
    });
    document.getElementById('btnCookies').addEventListener('click', function(){
        updateMenuGrid(menuGrid, gridItem, cookies, this);
    });    
}

//update function for menu grid to change items when clicked on button
function updateMenuGrid(menuGrid, gridItem, products, button){
    const buttons = document.querySelectorAll('.button-container button');
    //remove active class from all buttons
    buttons.forEach(btn =>{
        btn.classList.remove('active')
    });
    //add active class for button passed
    button.classList.add('active')
    //remove items present
    while (menuGrid.children.length > 1) {
        menuGrid.removeChild(menuGrid.lastChild);
    }
    //create items needed
    createProducts(menuGrid, gridItem, products);
}


function createProducts(grid, gridItem, products, enableWindow = true) {
    products.forEach(product => {
        const productCard = gridItem.cloneNode(true);
        productCard.id = '';
        productCard.style.display = "block"
        // Update the content
        productCard.querySelector('.item-img').src = product.imgSrc;
        productCard.querySelector('.card-title').textContent = product.title;
        productCard.querySelector('.item-description').textContent = product.description;
        productCard.querySelector('.item-price').textContent = product.formatPrice();
        //if window should be enabled, add click listener, by default it is true
        if(enableWindow){
            productCard.addEventListener('click', function(event) {
                if (!event.target.classList.contains('add-button') && 
                !event.target.classList.contains('decrement-button') &&
                !event.target.classList.contains('increment-button')) {
                    openwindow(product);
                }
            });
        }
        //append the card to the container
        grid.appendChild(productCard);
    });
}


function openwindow(product) {
    let windowContainer = document.getElementById('windowContainer');
    windowContainer.style.display = "block";
    //populate window with product details
    windowContainer.querySelector('.window-img').src = product.imgSrc;
    windowContainer.querySelector('.window-title').textContent = product.title;
    windowContainer.querySelector('.window-description').textContent = product.description;
    windowContainer.querySelector('.item-price').textContent = product.formatPrice();
    //close the window
    let closeWindow = document.getElementById('close-window');
    closeWindow.onclick = function() {
        windowContainer.style.display = "none";
    }
    //close window when clicking outside of it
    window.onclick = function(event) {
        if (event.target == windowContainer) {
            windowContainer.style.display = "none";
        }
    }
}

//swap add button to -, quantity and + 
function swapButton(element){
    element.style.display = 'none';
    element.nextElementSibling.style.display = 'flex';
}

//chenge the quantity when buttons + and - are clicked
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

//when dom loaded create top products
document.addEventListener('DOMContentLoaded', () => {
    const topProductsGrid = document.querySelector('.top-products-grid');
    const gridItem = document.getElementById('template')
    //pass false to not create windows when clicked on products on main page
    createProducts(topProductsGrid, gridItem, topProducts, false);
});

//when dom loaded create menu items
document.addEventListener("DOMContentLoaded", () => {
    createMenuItems();
})
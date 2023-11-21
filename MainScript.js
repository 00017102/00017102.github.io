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
//format srice
function formatPrice(totalPrice){
    return `${totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} sum`;
}

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
    new CartProduct("Clinkers", 400000, "https://img.taste.com.au/hbNtzI2Q/taste/2021/08/clinkers-cake-173208-2.jpg", 4),
    new CartProduct("Potato Cake",350000, "https://assets.bonappetit.com/photos/5f7f4a04ba63e7584fca0518/1:1/w_2560%2Cc_limit/Dessert-Sweet-Potato-Cake-Salted-Cream-Cheese.jpg"),
    new CartProduct("Strawberry Cheesecake",50000, "https://sugarspunrun.com/wp-content/uploads/2023/06/Strawberry-cheesecake-recipe-6-of-8.jpg"),
]
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
]

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
        productCard.querySelector('.add-button').addEventListener('click', function(){
            const cartProduct = new CartProduct(product.title, product.price, product.imgSrc);
            cartProducts.push(cartProduct);
            encodeCartToURL(cartProducts);
            productCard.querySelector('.decrement-button').addEventListener('click', function(){
                const quantity = productCard.querySelector('.quantity').innerHTML;
                cartProducts[cartProducts.findIndex(item => item.title == cartProduct.title)].quantity = quantity;
            })
            productCard.querySelector('.increment-button').addEventListener('click', function(){
                const quantity = productCard.querySelector('.quantity').innerHTML;
                cartProducts[cartProducts.findIndex(item => item.title == cartProduct.title)].quantity = quantity;
            })
        });
        //append the card to the container
        grid.appendChild(productCard);
    });
}

function createCart(container, cartTemplate, cartItems){
    let totalPrice = document.querySelector
    cartItems.forEach(cartItem => {
        const item = cartTemplate.cloneNode(true);
        const price =  cartItem.price * cartItem.quantity
        item.id = ''
        item.querySelector('.image').src = cartItem.imgSrc;
        item.querySelector('.name').textContent = cartItem.title;
        item.querySelector('.quantity').textContent = cartItem.quantity;
        item.querySelector('.increment-button').addEventListener('click', function(){
            const quantity = item.querySelector('.quantity').innerHTML;
            item.querySelector('.price').textContent = formatPrice(cartItem.price * quantity);
        })
        item.querySelector('.decrement-button').addEventListener('click', function(){
            const quantity = item.querySelector('.quantity').innerHTML;
            console.log(quantity);
            item.querySelector('.price').textContent = formatPrice(cartItem.price * quantity);
            if(item.querySelector('.quantity-container').style.display == 'none'){
                item.style.display = 'none';
            }
        })
        item.querySelector('.price').textContent = formatPrice(price);
        container.appendChild(item);
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

function openSidebar(){
    burgerMenuIcon = document.getElementById('burgerMenuIcon');
    closeSidebarIcon = document.getElementById('closeSidebarIcon');
    sidebarContainer = document.getElementById('sidebarContainer');
    burgerMenuIcon.addEventListener('click', function(){
        console.log(cartProducts);
        sidebarContainer.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
    closeSidebarIcon.addEventListener('click', function(){
        sidebarContainer.style.display = 'none';
        document.body.style.overflow = 'unset';
    });
}

document.addEventListener('DOMContentLoaded', ()=> {
    openSidebar()
});

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('cartItems');
    const template = document.getElementById('cartTemplate');
    createCart(container, template, cartProducts);
});

//when dom loaded create top products
document.addEventListener('DOMContentLoaded', () => {
    const topProductsGrid = document.querySelector('.top-products-grid');
    const gridItem = document.getElementById('template');
    //pass false to not create windows when clicked on products on main page
    createProducts(topProductsGrid, gridItem, topProducts, false);    
});

//when dom loaded create menu items
document.addEventListener("DOMContentLoaded", () => {
    createMenuItems();
})


document.addEventListener('DOMContentLoaded', function() {
    showCustomFlavorInput();
    showCustomWriting();
    //listen for form changes to update the price
    document.getElementById('cakeSize').addEventListener('change', updatePrice);
    document.getElementById('yesWriting').addEventListener('change', updatePrice);
    document.getElementById('noWriting').addEventListener('change', updatePrice);
    document.getElementById('cakeFlavor').addEventListener('change', updatePrice);
    updatePrice();
    document.querySelectorAll('input[name="topping"]').forEach(function(elem){
        elem.addEventListener('change', updatePrice);
    });
});

function showCustomWriting(){
    //listen for changes on the custom writing radio buttons
    document.querySelectorAll('input[name="customWriting"]').forEach(function(elem) {
        elem.addEventListener('change', function(event) {
            const writingInput = document.getElementById('customWritingInput');
            //show input if yes selected
            if (event.target.value === 'yes') {
                writingInput.style.display = 'block';
            } else {
                writingInput.style.display = 'none';
            }
        });
    });
}
//if user chose other show input 
function showCustomFlavorInput() {
    const selectedFlavor = document.getElementById('cakeFlavor').value;
    const customFlavorDiv = document.getElementById('customFlavor');

    if (selectedFlavor === 'other') {
        customFlavorDiv.style.display = 'block';
    } else {
        customFlavorDiv.style.display = 'none';
    }
}

// Event listener for flavor selection
document.getElementById('cakeFlavor').addEventListener('change', function() {
    showCustomFlavorInput();
    updatePrice(); // Assuming you have an updatePrice function for price calculation
});



//calculate and update the price
function updatePrice() {
    //initial price
    let totalPrice = 0;
    const toppingPrice = 5000;
    //additional price for custom writing
    const customWritingPrice = 50000;
    //get selected size
    const selectedSize = document.getElementById('cakeSize').value;
    //get custom writing
    const customWritingSelected = document.getElementById('yesWriting').checked;
    //get selected flavor
    const selectedFlavor = document.getElementById('cakeFlavor').value;
    //prices for each size
    const sizePrices = {
        none: 0,
        bento: 80000,
        small: 100000,
        medium: 200000,
        large: 300000,
        xlarge: 400000
    };
    //price for each flavor
    const flavorPrices = {
        none: 0,
        vanilla: 30000,
        chocolate: 35000,
        redVelvet: 40000,
        lemon: 45000,
        banana: 50000,
        cheesecake: 55000,
        coffee: 60000,
        coconut: 65000,
        fruit: 70000,
        pistachio: 75000,
        peanut: 80000,
        caramel: 85000,
        blackForest: 90000,
        strawberry: 95000,
        other: 100000 
    };
    //update price accroding to size
    totalPrice += sizePrices[selectedSize];
    //update price according to flavour
    totalPrice += flavorPrices[selectedFlavor];
    //calculate price for toppings
    if(selectedFlavor != 'none' && selectedSize != 'none'){
        document.getElementById('inputButton').removeAttribute('disabled');
        const toppings = document.querySelectorAll('input[name="topping"]:checked');
        const numberOfToppings = toppings.length;
        totalPrice += numberOfToppings * toppingPrice;
        //check if custom writing is added
        if (customWritingSelected) {
            //update price if yes
            totalPrice += customWritingPrice;
        }
    }else{
        document.getElementById('inputButton').setAttribute('disabled', '');
    }

    //update price display
    document.getElementById('cakePrice').innerHTML = formatPrice(totalPrice);
}
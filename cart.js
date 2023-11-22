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
    checkout();
});


    function checkout(){
        var modal = document.getElementById("checkoutModal");
    
        // Get the button that opens the modal
        var btn = document.getElementById("checkoutButton");
    
        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];
    
        // When the user clicks the button, open the modal
        btn.onclick = function() {
            modal.style.display = "block";
        }
    
        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
            modal.style.display = "none";
        }
    
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }
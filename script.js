let lastScrollTop = 0;

window.addEventListener("scroll", function() {
    let currentScroll = document.documentElement.scrollTop;
    let header = document.querySelector("header");
    let headerHeight = header.clientHeight; // Gets the dynamic height of the header

    if (currentScroll > lastScrollTop) {
        // Scroll Down
        header.style.top = `-${headerHeight}px`; // Uses the header's height
    } else {
        // Scroll Up
        header.style.top = "0";
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Resets at top and accounts for mobile negative scrolling
}, false);



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
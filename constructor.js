
document.addEventListener('DOMContentLoaded', function() {
    showCustomFlavorInput();
    showCustomWriting();
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
    //format srice
    function formatPrice(totalPrice){
        return totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    //update price display
    document.getElementById('cakePrice').innerHTML = `${formatPrice(totalPrice)} sum`;
}

document.addEventListener('DOMContentLoaded', function() {
    showCustomWriting();
    updatePrice();
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

//calculate and update the price
function updatePrice() {
    //initial price
    let totalPrice = 0;
    //additional price for custom writing
    const customWritingPrice = 50000;
    //get selected size
    const selectedSize = document.getElementById('cakeSize').value;
    //get custom writing
    const customWritingSelected = document.getElementById('yesWriting').checked;
    //prices for each size
    const sizePrices = {
        none: 0,
        bento: 100000,
        small: 200000,
        medium: 300000,
        large: 400000,
        xlarge: 500000
    };

    
    //update price accroding to size
    totalPrice += sizePrices[selectedSize];

    //check if custom writing is added
    if (customWritingSelected) {
        //update price if yes
        totalPrice += customWritingPrice;
    }
    //format srice
    function formatPrice(totalPrice){
        return totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    //update price display
    document.getElementById('cakePrice').innerHTML = `${formatPrice(totalPrice)} sum`;
    document.getElementById('cakeSize').addEventListener('change', updatePrice);
    document.getElementById('yesWriting').addEventListener('change', updatePrice);
    document.getElementById('noWriting').addEventListener('change', updatePrice);
}
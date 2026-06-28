
function changeColor(button) {
    // Change the button's background color when clicked in donation.html
    button.style.backgroundColor = '#28a745'; 
}


let selectedPaymentMethod = '';

function selectOption(method, button) {

    document.getElementById('paypalButton').classList.remove('selected');
    document.getElementById('masterCardButton').classList.remove('selected');

    // Set the selected payment method and change button color
    selectedPaymentMethod = method;
    button.classList.add('selected');
}




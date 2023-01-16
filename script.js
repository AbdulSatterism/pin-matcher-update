// generate pin 
function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {

        return pin;
    }
    else {

        return getPin()

    }


}
// set pin
function generatePin() {
    const displayPin = document.getElementById('get-pin');
    displayPin.value = getPin();

}
// pin-button, enter-pin
document.getElementById('pin-button').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const inputField = document.getElementById('enter-pin');
    if (isNaN(number)) {
        if (number == 'C') {
            inputField.value = ''
        }
        else if (number == 'back') {
            inputField.value = inputField.value.slice(0, -1)
        }
    }
    else {
        const previousInput = inputField.value;
        const newPinNumber = previousInput + number;
        inputField.value = newPinNumber;
    }
    // console.log(enterInputField)
})

// submit button
document.getElementById('submit-button').addEventListener('click', function () {
    const displayPin = document.getElementById('get-pin').value;
    const inputField = document.getElementById('enter-pin').value;
    const errorMessage = document.getElementById('error');
    const successMessage = document.getElementById('success');

    if (displayPin == inputField) {
        successMessage.style.display = 'block'
        errorMessage.style.display = 'none'

    }
    else {
        errorMessage.style.display = 'block'
        successMessage.style.display = 'none'

    }
})
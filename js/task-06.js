document.querySelector('body').style.backgroundColor = '#EBECF0';
const inputId = document.getElementById('validation-input');
inputId.addEventListener('blur', blurBorderColor);

function blurBorderColor(event) {
const inputDataLength = Number(inputId.dataset.length);
const inputValueLength = Number(inputId.value.trim().length);

if (inputValueLength === inputDataLength) {
    inputId.classList.add('valid');
    inputId.classList.remove('invalid');
} else {
    inputId.classList.remove('valid');
    inputId.classList.add('invalid');
}
}
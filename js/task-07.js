
const inputRangeId = document.getElementById('font-size-control');
const textId = document.getElementById('text');
textId.style.fontSize = inputRangeId.value + "px";
function fontSizeControl(event) {
    textId.style.fontSize = event.currentTarget.value + 'px';
}
inputRangeId.addEventListener('input', fontSizeControl);
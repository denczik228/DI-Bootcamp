const input = document.querySelector('input');
const log = document.getElementById('notLetter');

input.addEventListener('keypress', chceking);

function chceking(e) {
    if (isNaN(e.key)) {
        input.value += e.charCode;
    } else {
        input.value = log.value;
    }
}
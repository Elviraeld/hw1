let buttons = document.querySelectorAll('.shopping-list button');
function changeColor(e) {
    e.target.style.color = 'lightgray'; 
}
buttons.forEach(button => {
    button.addEventListener('click', changeColor);
});

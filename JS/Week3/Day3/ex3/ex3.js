//Ex 3:Drag &Drop
const objMy = document.getElementById("box");
const areaForBox = document.getElementById("target");

areaForBox.ondragover = allowDrop;


function allowDrop(event) {
    event.preventDefault()
}

objMy.ondragstart = drag;

function drag(event) {
    event.dataTransfer.setData('id', event.target.id)
}

areaForBox.ondrop = drop;

function drop(event) {
    let itemId = event.dataTransfer.getData('id');
    console.log(itemId);
    event.target.append(document.getElementById(itemId))
}
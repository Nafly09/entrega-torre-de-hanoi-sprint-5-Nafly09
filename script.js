let discsOnTower1 = [null, null, null, null, null, null, null, null];
let discsOnTower2 = [null, null, null, null, null, null, null, null];
let discsOnTower3 = [null, null, null, null, null, null, null, null];
let boxes = document.querySelectorAll('boxTorres');
let disks = document.querySelectorAll('div.disco');

function allowDrop(event){
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData('Object', event.target.id)
}

function drop(event, el){
    event.preventDefault();
    let data = event.dataTransfer.getData('Object');
    el.prepend(document.getElementById(data))
}
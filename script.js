// let discsOnTower1 = [null, null, null, null, null, null, null, null];
// let discsOnTower2 = [null, null, null, null, null, null, null, null];
// let discsOnTower3 = [null, null, null, null, null, null, null, null];

let boxes = document.querySelectorAll('boxTorres');
let disks = document.querySelectorAll('div.disco');

// FUNÇÃO PARA PERMITIR QUE O DROP ACONTEÇA
function allowDrop(event){
    event.preventDefault();
}

// FUNÇÃO PARA PEGAR OS DADOS DO OBJETO ARRASTADO PELO MOUSE
function drag(event) {
    event.dataTransfer.setData('Object', event.target.id)
}

// FUNÇÃO PARA JUNTAR O OBJETO ARRASTADO A TORRE DESIGNADA
function drop(event, el){
    event.preventDefault();
    let data = event.dataTransfer.getData('Object');
    el.prepend(document.getElementById(data))
}
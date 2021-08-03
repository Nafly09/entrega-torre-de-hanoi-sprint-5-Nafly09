// let discsOnTower1 = [null, null, null, null, null, null, null, null];
// let discsOnTower2 = [null, null, null, null, null, null, null, null];
// let discsOnTower3 = [null, null, null, null, null, null, null, null];

// PEGANDO OS ELEMENTOS PRO DOM
let blocoDeDiscos = document.getElementById('blocoDiscos');
let blocoDeTorres = document.getElementById('blocoTorres');
let blocoBoxTorres = document.getElementById('blocoBoxTorres');

// FUNÇÃO PARA CRIAR OS DISCOS
function createDiscs(){
    for(let i = 1; i <= 4; i++){
        let discos = document.createElement('div');
        discos.setAttribute('id',`disco${i}`);
        discos.classList.add('discos');
        blocoDeDiscos.appendChild(discos)
    }
    return blocoDeDiscos
}
createDiscs()


// FUNÇÃO PARA CRIAR AS TORRES
function createTowers(){
    for (let j = 1; j <= 3; j++){
        let torres = document.createElement('div');
        let blocos = document.createElement('div');
        torres.setAttribute('id', `torre${j}`);
        torres.classList.add('torres');
        blocos.setAttribute('id', `boxTorre${j}`);
        blocos.classList.add('boxTorres');
        blocoBoxTorres.prepend(blocos);
        blocoDeTorres.appendChild(torres);
    }
    return blocoBoxTorres
}

createTowers();
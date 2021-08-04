//CRIANDO UMAS VARIÁVEIS GLOBAIS
let currentDisc = ''
let count = 0
let arrayColors = ['#ffcc66', '#66ffff', '#ff9966', '#cc00cc', '#F0FFFF', '#D2691E', '#9932CC', '#FFF0F5']

// PEGANDO OS ELEMENTOS PRO DOM

const winSection = document.getElementById('win');
const finalSection = document.getElementById('finalSection');
let blocoDeDiscos = document.getElementById('blocoDiscos');
let blocoDeTorres = document.getElementById('blocoTorres');
let blocoBoxTorres = document.getElementById('blocoBoxTorres');



// FUNÇÃO PARA CRIAR OS DISCOS
function createDiscs(){
    for(let i = 1; i <= 4; i++){
        //CRIANDO OS DISCOS COM SEUS ATRIBUTOS E CLASSES
        let discos = document.createElement('div');
        discos.setAttribute('id',`disco${i}`);
        discos.classList.add('discos');
        blocoDeDiscos.appendChild(discos);
        // ADICIONANDO UM LISTENER DE CLICK EM CADA DISCO
        discos.addEventListener('click', function get(event){
            if(event.currentTarget === blocoDeDiscos.firstElementChild){
                currentDisc = event.currentTarget
            } else if(event.currentTarget === document.getElementById('boxTorre1').firstElementChild){
                currentDisc = event.currentTarget
            } else if(event.currentTarget === document.getElementById('boxTorre2').firstElementChild){
                currentDisc = event.currentTarget
            } 
        })
        //ADICIONANDO UM LISTENER PARA PERMITIR QUE O DISCO TAMBÉM RETORNE PARA TORRE INICIAL
        blocoDeDiscos.addEventListener('click', function getTower(event){
            if(event.currentTarget.childElementCount === 0 && currentDisc !== ''){
                event.currentTarget.prepend(currentDisc);
                count++
                moveCounter.innerHTML = `Número de movimentos: ${count}`
            }

            if(currentDisc.clientWidth < event.currentTarget.firstElementChild.clientWidth){
                event.currentTarget.prepend(currentDisc);
                count++
                moveCounter.innerHTML = `Número de movimentos: ${count}`
            }
        })
        //COLOCANDO OS DISCOS NO BLOCO DE DISCOS
        blocoDeDiscos.appendChild(discos)
    }
    return blocoDeDiscos
}


createDiscs()

// FUNÇÃO PARA CRIAR AS TORRES
function createTowers(){
    for (let j = 1; j <= 3; j++){
        //CRIANDO AS TORRES COM SEUS ATRIBUTOS E CLASSES
        let torres = document.createElement('div');
        let blocos = document.createElement('div');
        torres.setAttribute('id', `torre${j}`);
        torres.classList.add('torres');
        //CRIANDO O BOX DE TORRE PARA RECEBER O DISCO SELECIONADO
        blocos.setAttribute('id', `boxTorre${j}`);
        blocos.classList.add('boxTorres');
        //ADICIONANDO UM LISTENER PARA SABER QUAL TORRE FOI SELECIONADA
        blocos.addEventListener('click', function getTower(event){

            if(event.currentTarget.childElementCount === 0 && currentDisc !== ''){
                event.currentTarget.prepend(currentDisc);
                count++
                moveCounter.innerHTML = `Número de movimentos: ${count}`
            }
            
            if(currentDisc.clientWidth < event.currentTarget.firstElementChild.clientWidth){
                event.currentTarget.prepend(currentDisc);
                count++
                moveCounter.innerHTML = `Número de movimentos: ${count}`
            }
            youWin()
        })

        //COLOCANDO O AS TORRES E O BOX DAS TORRES EM SUAS DIV'S.
        blocoBoxTorres.prepend(blocos);
        blocoDeTorres.appendChild(torres);
    }
    return blocoBoxTorres
}

createTowers();

//FUNÇÃO DE CRIAÇÃO DO BOTÃO E NÚMERO DE MOVIMENTOS
let restartButton = '';
let addDisc = '';
let removeDisc = '';
let moveCounter;

function createFinalSection(){
    moveCounter = document.createElement('h2');
    moveCounter.innerHTML = `Número de movimentos: ${count}`
    moveCounter.classList.add('moveCounter');
    finalSection.appendChild(moveCounter); 
    addDisc = document.createElement('button');
    addDisc.innerHTML = 'Adicionar Mais Discos';
    addDisc.classList.add('restartButton')
    finalSection.appendChild(addDisc);
    restartButton = document.createElement('button');
    restartButton.innerHTML = 'Reiniciar';
    restartButton.classList.add('restartButton');
    finalSection.appendChild(restartButton);
    return finalSection
}

createFinalSection()
// (blocoDeDiscos.lastElementChild.clientWidth + blocoDeDiscos.lastElementChild.clientWidth/100 * 15) + 'px';

//FUNÇÃO PARA ADICIONAR MAIS DISCOS
    addDisc.addEventListener('click', add)
    let blockCounter = 0
    function add(){
        if(blockCounter < 4){
            let lastElementWidth = blocoDeDiscos.lastElementChild.clientWidth;
            let lastElementWidthPercentage = blocoDeDiscos.lastElementChild.clientWidth/100 * 15
            
            let newDisc = document.createElement('div');
            newDisc.classList.add('discos');
            newDisc.style.width = lastElementWidth + lastElementWidthPercentage + 'px'
            newDisc.style.backgroundColor = arrayColors[Math.floor(Math.random() * arrayColors.length)]
            blocoDeDiscos.appendChild(newDisc)
            blockCounter++
        }
    }


//FUNÇÃO DE VITÓRIA
let win = '';
let blocksCondition = blocoDeDiscos.childElementCount

function youWin(){
    if(document.getElementById('boxTorre1').childElementCount === blocksCondition){
        winSection.classList.replace('hidden', 'win')
        blocoDeDiscos.style.zIndex = 0
        return winSection
    }
}


//FUNÇÃO DE REINICIAR PARTIDA

restartButton.addEventListener('click', restart)

function restart(){
    blocoDeDiscos.style.zIndex = 2
    win.innerText = ''
    blocoDeDiscos.innerHTML = ''
    if(document.getElementById('win') !== null){
        document.getElementById('win').classList.replace('win', 'hidden');
    }

    for(i = 1; i < 3; i++){
        document.getElementById(`boxTorre${i}`).innerHTML = ''
    }
    count = 0;
    blockCounter = 0
    moveCounter.innerHTML = `Número de movimentos: ${count}`
    currentDisc = ''
    createDiscs();
}
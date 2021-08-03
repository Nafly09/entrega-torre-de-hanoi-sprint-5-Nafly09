let currentDisc = ''

// PEGANDO OS ELEMENTOS PRO DOM

const countSection = document.getElementById('countSection')
const buttons = document.getElementById('buttons')
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
<<<<<<< HEAD
        blocoDeDiscos.appendChild(discos);
=======
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
            event.currentTarget.prepend(currentDisc)
        })
        //COLOCANDO OS DISCOS NO BLOCO DE DISCOS
        blocoDeDiscos.appendChild(discos)
>>>>>>> Development
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

            if(event.currentTarget.firstElementChild === null){
                event.currentTarget.prepend(currentDisc);
            }
            
            if(currentDisc.clientWidth < event.currentTarget.firstElementChild.clientWidth){
                event.currentTarget.prepend(currentDisc);
            }
            console.log(currentDisc)
            if(document.getElementById('boxTorre1').childElementCount === 4){
                alert ('Você Venceu')
            }
            
        })

        blocoDeDiscos.addEventListener('click', function getTowerDisc(event){
            if(currentDisc.clientWidth < event.currentTarget.firstElementChild.clientWidth){
                event.currentTarget.prepend(currentDisc);
            }
            if(document.getElementById('boxTorre1').childElementCount === 4){
                alert ('Você Venceu')
            }
        })

        //COLOCANDO O AS TORRES E O BOX DAS TORRES EM SUAS DIV'S.
        blocoBoxTorres.prepend(blocos);
        blocoDeTorres.appendChild(torres);
    }
    return blocoBoxTorres
}

createTowers();


function createMoveCounter(){
    const moveCounter = document.createElement('h2')
    moveCounter.innerHTML = 'Seu número de movimentos'
    moveCounter.classList.add('moveCounter');
    countSection.appendChild(moveCounter) 
    return countSection
}

createMoveCounter()

function createButton(){
    const restartButton = document.createElement('button');
    restartButton.innerHTML = 'Reiniciar';
    restartButton.classList.add('restartButton');
    buttons.appendChild(restartButton);
    const undoMoveButton = document.createElement('button');
    undoMoveButton.innerHTML = 'Desfazer';
    undoMoveButton.classList.add('undoMoveButton');
    buttons.appendChild(undoMoveButton);
    return buttons
}

createButton()
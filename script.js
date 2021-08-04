let currentDisc = ''

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
            event.currentTarget.prepend(currentDisc)
        })
        //COLOCANDO OS DISCOS NO BLOCO DE DISCOS
        blocoDeDiscos.appendChild(discos)
    }
    return blocoDeDiscos
}

createDiscs()

let count = 0

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
                count++
            }
            
            if(currentDisc.clientWidth < event.currentTarget.firstElementChild.clientWidth){
                event.currentTarget.prepend(currentDisc);
                count++
            }   console.log(count)
            whoWin()
        })

        blocoDeDiscos.addEventListener('click', function getTowerDisc(event){
            if(currentDisc.clientWidth < event.currentTarget.firstElementChild.clientWidth){
                event.currentTarget.prepend(currentDisc);
            }
            //  if(document.getElementById('boxTorre1').childElementCount === 4){
            //      alert ('Você Venceu')
            //  }
            
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

function createFinalSection(){
    const moveCounter = document.createElement('h2')
    moveCounter.innerHTML = `Número de movimentos: ${count}`
    moveCounter.classList.add('moveCounter');
    finalSection.appendChild(moveCounter) 
    restartButton = document.createElement('button');
    restartButton.innerHTML = 'Reiniciar';
    restartButton.classList.add('restartButton');
    finalSection.appendChild(restartButton);
    return finalSection
}

createFinalSection()


//FUNÇÃO DE VITÓRIA
let win = '';

function whoWin(){
    if(document.getElementById('boxTorre1').childElementCount === 4){
        win = document.createElement('p');
        win.innerText = 'Você venceu!'
        winSection.appendChild(win)
        return winSection
    }
}

//FUNÇÃO DE REINICIAR PARTIDA

restartButton.addEventListener('click', restart)

function restart(){
    win.innerText = ''
}
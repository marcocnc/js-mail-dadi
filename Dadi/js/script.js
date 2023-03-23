//Creazione array
const arrayCPU = [1, 2, 3, 4, 5, 6];
const arrayUser = [1, 2, 3, 4, 5, 6];
console.log(arrayCPU, arrayUser);



const btnPlay = document.getElementById('play');
btnPlay.addEventListener('click', function(){
    
    //Creazione numeri random
    const randomCPU = Math.floor(Math.random() * arrayCPU.length);
    const randomUser = Math.floor(Math.random() * arrayUser.length);
    console.log(randomCPU, randomUser);

    //Da stampare
    const outputMessage = document.getElementById('message');
    const outputCPU = document.getElementById('numberCPU');
    const outputUser = document.getElementById('numberUser');
    
    //Array stampati
    outputCPU.innerHTML = arrayCPU[randomCPU];
    outputUser.innerHTML = arrayUser[randomUser];
    console.log(outputCPU, outputUser);

    /*Condizioni per visualizzare diversi messaggi in colori diversi, aggiungendo la classe desiderata e rimuovendo le altre, perché altrimenti continuerebbero ad aggiungersi e si bugga*/
    if(randomCPU > randomUser){
        outputMessage.innerHTML = "Hai perso :(";
        outputMessage.classList.add('defeat');
        outputMessage.classList.remove('draw', 'victory');
    }else if(randomCPU === randomUser){
        outputMessage.innerHTML = "Pareggio :l";
        outputMessage.classList.add('draw');
        outputMessage.classList.remove('victory', 'defeat');
    }else{
        outputMessage.innerHTML = "Hai vinto! :D";
        outputMessage.classList.add('victory');
        outputMessage.classList.remove('draw', 'defeat');
    }
})

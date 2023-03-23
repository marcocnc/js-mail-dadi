// Dichiarazione variabili

// Input
const inputEmail = document.getElementById('userEmail'); 

// Button
const sendBtn = document.getElementById('btnSend');

sendBtn.addEventListener('click', function(){
    const emailUser = inputEmail.value;
    console.log(emailUser);
    let validForm = true;

    if(emailUser.length < 5) validForm = false;
    console.log(emailUser.length, validForm);
    const outputMessage = document.getElementById('message');
    
    if(validForm){
        outputMessage.innerHTML =`
        Ciao ${emailUser} benvenuto/a!`;
    }else{
        alert("L'email non è stata inserita correttamente");
    }

})



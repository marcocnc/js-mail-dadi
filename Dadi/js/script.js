//Creazione array
const arrayCPU = [1, 2, 3, 4, 5, 6];
const arrayUser = [1, 2, 3, 4, 5, 6];
console.log(arrayCPU, arrayUser);

const randomCPU = Math.floor(Math.random() * arrayCPU.length);
const randomUser = Math.floor(Math.random() * arrayUser.length);
console.log(randomCPU, randomUser);

if(randomCPU > randomUser){
    console.log('Vince CPU');
}else if(randomCPU === randomUser){
    console.log('Pareggio');
}else{
    console.log('Vince User');

}
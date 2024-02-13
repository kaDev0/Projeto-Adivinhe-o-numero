let numbertofined = 0;
let atempps = 0;

 function refrech (){
    //gera um numero aleatorio

     numbertofined = Math.floor(Math.random() * 100);
     atempps = 0;
     console.log(numbertofined);

 }

 function veryFy(){

    let bet = document.getElementById('bet').value;

    if(bet <100 || bet > 1 ){

    }  
    
    if (bet >numbertofined)
    {
     atempps++;
     alert('O número a ser encontrado é menor');
  
  
   } 
   else if (bet < numbertofined)
    {
     atempps++;
     alert('O número a ser encontrado é maior');
   }
    else 
    {
     alert('Parabéns, você acertou! com uma quantidade de erros: ' + atempps);
     refrech();
   }
   
 }


 // Assuming you have a function named refrech defined somewhere else in your code
 refrech();
var numeroSecreto = parseInt(Math.random()* 10);
console.log(numeroSecreto)
var tentativas = 3;
while(tentativas > 0){
    var chute = parseInt(prompt('Digite um número entre 0 e 10'));
    
  if(numeroSecreto == chute){
      alert('Acertou')
    break
    } else if ( chute > numeroSecreto){
      alert('O número secreto é menor ');
      tentativas = tentativas - 1
    } else if(chute < numeroSecreto){
      alert('O número secreto é maior')
      tentativas = tentativas - 1
    } 
  }
if( chute !== numeroSecreto){
  alert('Suas tentativas acabaram. O número secreto era ' + numeroSecreto)  
}


// var total = 0;
// while(total < 5){
//   console.log(total)
//   total = total + 1
// }
// alert('O número final é: '+ total)

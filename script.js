let i = 3;
let computer = Math.ceil(Math.random()*10);
function ValorMentalista() {
    let usuario = parseInt(document.querySelector('#entradaDeNumeroMentalista').value);
    let dica = usuario / computer
    i=i-1
    console.log(computer)
    let  resultado3 = document.getElementById('respostaMentalista');
        if (i > 0)
        {
            if(computer == usuario)
            {
                resultado3.innerHTML = `Parabens!<br>Mentalista `;
             
                i = "fim"
            }
            else{
                if(dica>1)
                {
                    resultado3.innerHTML =`Errou, é menor!<br>Você tem somente ${i} tentativas`;
                    
                }
                else
                {
                    resultado3.innerHTML = `Errou, é maior!<br>Você tem somente ${i} tentativas`;
                }
            }
        }
        else if(i=="fim")
        {
            resultado3.innerHTML = 
            `
            Jogo finalizado
            `;
        }
        else if(i<0)
        {
            resultado3.innerHTML = 
            `
            Você perdeu!
            `;
        }
document.querySelector('#entradaDeNumeroMentalista').value = ""
}

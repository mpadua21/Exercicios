chefe()

function chefe(){

    exe9()
}


function exe9(){
    var soma = 0
    var numero = Number(prompt(`Digite o número desejado`)) // Recebe o número do Usuário

    for(var i = numero;i>=1;i--){ // Diminuira o i até que ele seja igual a 1
        if(numero % i == 0){ // se a divisão do numero resultar em 0, quer dizer que ele é divisivel por aquele número no i
            soma = soma+i // soma dos divisores
        }
        
    }
    console.log(`A soma dos divisores é ${soma}`)
}
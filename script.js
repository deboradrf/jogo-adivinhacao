let result = document.getElementById("result");
let numeroSecreto = parseInt(Math.random() * 101);

function adivinhar() {    
    let chute = document.getElementById("input-chute").value;
    
    if (chute == "") {
        result.innerHTML = "Digite um número!";
    }
    else {
        if (chute == numeroSecreto){
            result.innerHTML = "Acertou!";
        }
        else if (chute > numeroSecreto)
        {
            result.innerHTML = "Errou! O número é menor";
        }   
        else if (chute < numeroSecreto){
            result.innerHTML = "Errou! O número é maior";
        } 
    }
    
}

document.getElementById("btn").addEventListener("click", adivinhar);
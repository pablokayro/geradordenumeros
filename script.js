// Gerar um numero aleatório entre 1 e 20;


const generate = document.getElementById( "generate" );
let numeroSorteado = document.getElementById( "numeroSorteado" );


function isAleatory (max, min) {
    const aleatoryFull = Math.round((Math.random() * (max - min) + min));
    return aleatoryFull;
}

function gerarNumero () {
    const maxValue = document.getElementById( "maxvalue" ).value;
    const minValue = document.getElementById( "minvalue" ).value;

    console.log(minValue, maxValue);
    if (maxValue.value != "" && minValue.value != ""){
        numeroSorteado.textContent = isAleatory(Number (maxValue), Number (minValue));
    }else{
        alert("Preencha todos os campos 🔴")
    }
}

generate.addEventListener("click", gerarNumero)
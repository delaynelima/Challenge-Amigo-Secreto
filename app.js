let listaAmigos = [];

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Amigo Secreto')
    exibirTextoNaTela('h2', 'Digite o nome dos seus amigos');
  
} 
function adicionarAmigosNoSorteio(){
    const amigo = document.getElementById('amigo').value;
    if (amigo == ""){
        alert('Por favor, insira um nome.');
        return false;
    }

    listaAmigos.push(amigo);
    document.getElementById('amigo').value = "";
    listarAmigos();
}
function listarAmigos(){
    document.getElementById('listaAmigos').innerHTML = "";
    let saida = "";
    for (let index = 0; index < listaAmigos.length; index++) {
        const amigo = listaAmigos[index];
        saida += '<li>'+ amigo+'</li>';
    }
    document.getElementById('listaAmigos').innerHTML = saida;
}
function sortearAmigo(){
    if(listaAmigos.length == 0){
        alert('lista vazia');
        return false;
    }
    let numeroSorteado = Math.floor(Math.random()*listaAmigos.length);
    const nomeSorteado = listaAmigos[numeroSorteado];
    document.getElementById('resultado').innerHTML = nomeSorteado;
}

exibirMensagemInicial();

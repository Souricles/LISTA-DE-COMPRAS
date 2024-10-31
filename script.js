
function adicionarItem(){

    const novoItem= document.getElementById('novoItem').value
    const lista= document.getElementById('listaCompras')

    if(novoItem !== ''){

        const itemLi= document.createElement('li');
        itemLi.textContent= novoItem ;
        lista.appendChild(itemLi);
    }

    document.getElementById('novoItem').value= '';
}
//função para marcar um item como concluido
function marcarComoConcluido(item){
    item.classList.toggle('concluido');
}

//adicionar um evento de click para cada item da lista

listaCompras.addEventListener('click', (event)=> {
    if(event.target.tagName === 'LI'){
        marcarComoConcluido(event.target);
    }
})

novoItem.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      adicionarItem()
    }
});


function load(){    
    texto.innerText = localStorage.getItem("nome");
}

function adicionar()
{
    var nome = txtNome.value;
    localStorage.setItem("nome", nome);
}



document.getElementById('cadastroForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;
    var confirmacaoSenha = document.getElementById('confirmacaoSenha').value;
    
    if (senha !== confirmacaoSenha) {
        alert('As senhas não coincidem!');
        return;
    }
    
    var dados = {
        nome: nome,
        email: email
    };
    
    var dadosJSON = JSON.stringify(dados, null, 2);
    var blob = new Blob([dadosJSON], {type: 'application/json'});
    var url = URL.createObjectURL(blob);
    
    var downloadLink = document.getElementById('downloadLink');
    downloadLink.innerHTML = '<a href="' + url + '" download="dados_usuario.json">Clique aqui para baixar o cadastro em JSON</a>';
    downloadLink.style.display = 'block';
    
    this.reset();
});

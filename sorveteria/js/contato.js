function msg(){
    let nome = document.getElementById("nome").value
    let email = document.getElementById("email").value
    let assunto = document.getElementById("assunto").value
    let mensagem = document.getElementById("mensagem").value

    if(nome !== '' && email !== '' && assunto !== '' && mensagem !== ''){
      alert(`Obrigado pela sua mensagem, ${nome}! Nossa equipe retornará sua solicitação em até 24h!`)
                   
    }else{
      alert(`Por gentileza, preencha todos os campos!`)
    }       
  }
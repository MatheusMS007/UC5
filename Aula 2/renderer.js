


window.api.receberResultado((resultado) => {
  const mensagem = document.getElementById("mensagem");

  if (resultado.ok) {
    mensagem.textContent = "Login realizado com sucesso!";
  } else {
    mensagem.textContent = "Usuário ou senha incorretos!";
  }
});
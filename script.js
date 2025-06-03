document.getElementById('contato').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita o envio do formulário

  // Pegando os elementos
  const nome = document.getElementById('nome');
  const email = document.getElementById('email');
  const assunto = document.getElementById('assunto');
  const mensagem = document.getElementById('mensagem');
  const erro = document.getElementById('mensagem-erro');
  const sucesso = document.getElementById('mensagem-sucesso');

  // Limpar mensagens anteriores
  erro.textContent = '';
  sucesso.textContent = '';
  nome.classList.remove('erro');
  email.classList.remove('erro');
  assunto.classList.remove('erro');
  mensagem.classList.remove('erro');

  let valido = true;

  // Validações
  if (nome.value.trim() === '') {
    nome.classList.add('erro');
    erro.textContent = 'Por favor, preencha o nome.';
    valido = false;
  } else if (!email.value.includes('@') || !email.value.includes('.')) {
    email.classList.add('erro');
    erro.textContent = 'Digite um e-mail válido.';
    valido = false;
  } else if (assunto.value.trim().length < 3) {
    assunto.classList.add('erro');
    erro.textContent = 'Digite um assunto com pelo menos 3 letras.';
    valido = false;
  } else if (mensagem.value.trim().length < 10) {
    mensagem.classList.add('erro');
    erro.textContent = 'A mensagem deve ter no mínimo 10 caracteres.';
    valido = false;
  }

  if (valido) {
    sucesso.textContent = 'Formulário enviado com sucesso!';
    document.getElementById('contato').reset();
  }
});

const botao_gabarito = document.getElementById('botao-gabarito');
const painelResultado = document.getElementById('resultado-painel');

botao_gabarito.addEventListener('click', function() {
  const r1 = document.querySelector('input[name="q1"]:checked');
  const r2 = document.querySelector('input[name="q2"]:checked');
  const r3 = document.querySelector('input[name="q3"]:checked');

  if (!r1 || !r2 || !r3) {
    alert('Responda todas as questões.');
    return;
  }

  let nota = 0;
  if (r1.value === 'C') nota++;
  if (r2.value === 'A') nota++;
  if (r3.value === 'B') nota++;

  let avaliacao = '<h3>Resultado:</h3><br>';
  avaliacao += '<p>Questão 1: Sua resposta: ' + r1.value + ' | Correta: C</p>';
  avaliacao += '<p>Questão 2: Sua resposta: ' + r2.value + ' | Correta: A</p>';
  avaliacao += '<p>Questão 3: Sua resposta: ' + r3.value + ' | Correta: B</p><br>';
  avaliacao += '<h3>Nota Final: ' + nota + ' / 3</h3>';

  painelResultado.innerHTML = avaliacao;
  painelResultado.style.display = 'block';
  botao_gabarito.style.display = 'none';
});

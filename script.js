//flag criada para saber se o último botão foi o sinal de igual ("=") para poder apagar o display e não concatená-looooo
var flag = false

// Função que vai estar inserindo os valores no display da calculadora.
// Além disso, ela verifica se o tipo do botão é uma ação (soma, subtração...) ou botão numérico que são os números de 1 à 9.
function calcular(tipo, valor) {
  if(tipo == 'ação') {
    
    flag = false

    switch(valor) {
      case 'c':
        document.getElementById('display').value = ''
        break;
      case '+':
        document.getElementById('display').value += valor
        break;
      case '-':
        document.getElementById('display').value += valor
        break;
      case 'x':
        document.getElementById('display').value += valor
        break;
      case '÷':
        document.getElementById('display').value += valor
        break;
      case '.':
        document.getElementById('display').value += valor
        break;
    }
    
    document.getElementById('display').scrollLeft += 50
    
    if (valor == '=') {
      
      // usuário apertou o botão de igual, logo, se ele apertar em seguida um botão numérico, então o display pode ser apagado
      flag = true

      //Pega a string contida no display e transforma em resultado de cálculo
      let resultado = document.getElementById('display').value
      try {
        if (resultado.indexOf('x') > 0 || resultado.indexOf('÷') > 0 ) { 
          resultado = resultado.replace(/x/g,'*')
          resultado = resultado.replace(/÷/g,'/')
      }
        resultado = eval(resultado)
      } catch (error) {
        resultado = 'ERROR!'
        alert('ERROR!\nCertifique-se de inserir o cálculo corretamente!\nApague e faça novamente!')
      }
      
      if (resultado == Infinity) {
        resultado = 'ERROR!'
        alert('Você não sabe que é impossível dividir um número por 0 na matemática? 🤔')
      }
      
      document.getElementById('display').value = resultado
    }
  }

  //Imprimir valores numéricos no display
  else {
    if (flag == true) {
      // Apagando o display antes de um novo valor numérico ser adicionado ao display
      document.getElementById('display').value = ''
      flag = false
    }
    document.getElementById('display').value += valor
    document.getElementById('display').scrollLeft += 50 
  }
}
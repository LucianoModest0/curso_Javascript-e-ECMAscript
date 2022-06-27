
let lista = [];
let num = document.getElementById('txtn');
let final = document.getElementById('fin');
let res = document.getElementById('result');

function addn() {

  if (num.value.length == 0) {
    window.alert('Por favor, digite um número entre 1 e 100')
  } else {
    let n = Number(num.value)
    if (n < 1 || n > 100) {
      window.alert('Por favor, digite um número entre 1 e 100')
    } else if (lista.includes(n)) {
      window.alert('Número já se encontra na lista, Digite outro número entre 1 e 100')
    } else {
      lista.push(n)
      let item = document.createElement('option')
      item.text = `Valor ${n} adicionado`
      final.appendChild(item)
    }
    num.value = ''
    num.focus()
  }
}

function finalizar() {

  let soma = 0;

  for (var i = 0; i < lista.length; i++) {
    soma += lista[i];
  }

  res.innerHTML = `Ao todo, temos ${lista.length} número cadastrados <br> <br> 
  
  O maior valor informado foi ${Math.max(...lista)} <br> <br> 
  
  O menor valor informado foi ${Math.min(...lista)} <br> <br> 

  Somando todos os valores, temos ${soma} <br> <br> 

  A média dos valores digitados é ${soma / lista.length}
  `


}
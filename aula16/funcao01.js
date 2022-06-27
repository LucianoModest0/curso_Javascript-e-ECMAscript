/*
- Chamada ou Evento
- Parâmetro(s)
- Ação
- Retorno
*/

/* 

function ação(param){ >>> função com parametro
             >>> ação
  return res >>> retorno
}

ação(5) >>> chamada+parametro

*/

function parimp(n) {
  if(n%2==0){
    return 'par'
  }else{
    return 'impar'
  }
}

let res = parimp(11)

console.log(res)
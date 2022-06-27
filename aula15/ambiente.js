let num = [5, 8, 9, 3]

/*
num[3] = 6 < o indice 3 recebe o valor 6
num.push(7) < vai ser adicionado um valor (7) no final da array
num.length < ver a quantidade de elementos na array
num.sort() < organiza a array em ordem crescente
*/

num.push (1)
num.sort()
console.log(num)
console.log(`o vetor tem ${num.length} posições`)
console.log(`O indice 2 tem valor de ${num[2]}`)

// percuso para exibição de vetores
for (let pos = 0; pos <num.length ; pos++ ){
  console.log(num[pos])
}

// forma simplificada de exibição de vetores
for ( let pos in num ) {
  console.log(num[pos])
}

// o indexOf() procura algum valor na array e retorna o índice daquele valor
let a = num.indexOf(8)

// Quando não se tem aquele valor na array o js retorna -1
if (a == -1 ) {
  console.log(`o valor não foi encontrado`)
} else {
  console.log(`o valor 8 está na posição ${a}`)
}
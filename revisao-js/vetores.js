let frutas = ['laranja','maça', 'banana','pera', 'uva', 'mamao']

//exibir o vetor
console.log(frutas)

//tirar o ultimo elemento do vetor
let ultimaFruta = frutas.pop()

console.log(frutas)
console.log(ultimaFruta)

// tirar o primeiro elemento do vetor
let primeiraFruta = frutas.shift()

console.log(frutas)
console.log(primeiraFruta)

// removendo de posiçoes intermediarias
// splice()
// 1º paramentro: posiçao que será removida (lembre-se que a contagem começa em zero)
// 2º paramentro: quantidade de elementos que serao removidos
let terceiraFruta = frutas.splice(2,1) // fruta na posiçao 2

console.log(frutas)
console.log(terceiraFruta)// splice() sempre retorna um vetor

// inserindo um elemento no fim do vetor
frutas.push('jabuticaba')

console.log(frutas)

// inserir um elemento no inicio do vetor
frutas.unshift("amora")

console.log(frutas)

//inserindo em intermediaria
// splice() para inserçao
//1º parametro: a posiçao onde ocorrera a inserçao
//2º parametro: quantos elementos serao excluidos (0)
//paramentros : elementos a serem inseridos

//inserindo na 4º posiçao

frutas.splice(3, 0, 'pessego')

console.log(frutas)

//inserindo duas frutas na 3º posiçao
frutas.splice(2, 0, 'caqui', 'jaca')

console.log(frutas)

//substuindo 6º fruta

frutas.splice(5, 1, 'abacate')

console.log(frutas)

//  Percursos de vetor

// 1) percurso via for tradicional
// É o mais flexivel, permitindo o percurso parcial(pode começar
// em um elemento que nao seja o primeiro e terminar que seja o ultimo)

for(let i = 0; i < frutas.length; i++){
console.log(i, frutas[i])

}
console.log('------------------------------')
// 2) Percuso via for tradicional, em ordem inversa

for (let i = frutas.length -1; i >= 0; i--  ){

    console.log(i, frutas[i])

}
console.log('------------------------------------------')
// 3) Percuso usando for ..of
// Percorre totalmente um vetor, sem necessidade de manter uma variavel
// contadora
// Variaveis:
// fruta -> nome da variavel que recebera cada elemento (pode ser qualquer nome valido de variavel)
// futas -> o nome do vetor que esta sendo percorrido

for(let fruta of frutas){
    console.log(fruta)

}
console.log('------------------------------------------')
// 4) Percurso utilizado forEach()
// forEach() recebe como argumento uma funçao cujo argumento
// é cada um dos elementos do vetor percorrido
// O nome do parametro da funçao passada pode ser qualquer nome valido
// de identificador
frutas.forEach(function(elemento){
    console.log(elemento)

})
console.log('------------------------------------------')

// forEach utilizando arrow function como parametro

frutas.forEach(elemento => console.log(elemento))
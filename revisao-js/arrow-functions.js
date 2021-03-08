// A rigor, a funçao abaixo nao seria necessaria, pois, usando
// recursos nativos do JS, poderiamos escrever x ** 2 ou Math.pow(x, 2)

// Caracteristicas desta funçao
// 1) Tem apenas um parametro
// 2) Seu corpo tem apenas uma linha , retornando valor
function quadrado(x) {

return x * x

}
console.log(quadrado(9))
console.log('---------------------------')

// O formato de funçao acima é perfeito para conversao em arrow function
// que um modo "abreviado" de escrever uma funçao em JS

// 1) Os parenteses em torno do parametro foram omitidos
// 2) A palavra >function< , que vinha Antes do parametro, foi substituido
//pelo simbolo => Depois do parametro
// 3) As chaves foram omitidas
// 4) A palavra-chave > return < foi omitida
// 5) Uma arrow function é uma funçao aninima. Portanto, caso se deseja
// chama-la posteriormente, é necessario atribuila a uma variavel
const quadrado2 = x=> x * x

console.log(quadrado2(9))
console.log('---------------------------')

// Funçao com mais de um parametro
function potencia(b, e) { // b = base , e = expoente
    return b ** e


}
console.log(potencia(2, 10))
console.log('---------------------------')

// Arrow function equivalente
// Quando temos mais de um parametro , os parametros retornam

const potencia2 = (b, e) => b ** e

console.log(potencia2(2, 10))
console.log('---------------------------')

// Funçao sem parametros, que retorna um numero aleatorio entre 1 e 60

function megasena(){
  
    // Math.random() -> retorna um numero aleatorio entre 0 (inclusive) e 1 (exclusive)
    // * 60 -> Ajusta faixa de valores para entre 0 e 59
    // + 1 -> ajusta a faixa de valores para entre 1 e 60
    //  Marh.ceil() -> retira as casas decimais de um numero, deixando apenas
    // a parte inteira

        return Math.ceil(Math.random() * 60 + 1)


}
console.log(megasena(), megasena(), megasena(), megasena(), megasena(), megasena())
console.log('---------------------------')

    // Os parametros vazios (obrigatorios) marcam o lugar dos parametros

    let megasena2 = () => Math.ceil(Math.random() * 60 + 1 )

    console.log(megasena2(), megasena2(), megasena2(), megasena2(), megasena2(), megasena2())
    console.log('---------------------------')


function somaVet(vet) {

    let soma = 0 
    for(let n of vet) soma += n
    return soma

}
console.log(somaVet([1, 2, 3, 4, 5, 6, 7, 8, 9]))
console.log('---------------------------')

// Com mais de uma linha no corpo, as chaves voltam e nao é mais
// possivel omitir a palavra-chave >return< caso a funçao retorne valor

const somaVet2 = vet => {

     let soma = 0 
    for(let n of vet) soma += n
    return soma

}
console.log(somaVet2([1, 2, 3, 4, 5, 6, 7, 8, 9]))
console.log('---------------------------')

// Conclusao: arrow function sao ideais para casos em que o corpo da funçao
// possui apenas uma linha, embora arrow functions com multiplas linhas
// nao sejam incomuns



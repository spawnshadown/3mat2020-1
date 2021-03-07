// Criaçao de um objeto vazio
let vazio1 = {}                 // forma moderna
let vazio2 = new Object()       // forma tradicional


// Criaçao de objetos ja com dados

let pessoa = {
    // Objetos ornagizam-se em pares de
    // Propriedade: valor
    // tambem chamados de 
    // atributo: valor
      nome: 'Orkutilson da Silva',  
      dataNasc: '2009-01-29',
      sexo: 'M',
      ocupacao: 'estudante',
      // Nomes de propriedade podem ter espaço e/ou acentos
      //mas , nesse caso, precisam vir entre aspas
      'cidade de origem': 'Franca/SP',

}

// Acessando uma propriedade do objeto

console.log(pessoa.nome)
console.log(pessoa.ocupacao)
//quando o nome da propriedade tem espaços ou acentos, nao é possivel
// acessa-la pela sintaxe do ponto. Deve suar a sintaxe dos colchetes.
console.log(pessoa['cidade de origem'])

// A sintaxe dos colchetes sempre funciona
console.log(pessoa.dataNasc)          //Sintaxe do ponto
console.log(pessoa['dataNasc'])     //Sintaxe dos colchetes
console.log('-------------------------------------')

// A sintaxe dos colchetes é importante tambem quando o nome da propriedade
// esta armazenada em um variavel

let prop = 'nome'

console.log(pessoa[prop])

prop = 'sexo'

console.log(pessoa[prop])

prop = 'cidade de origem'

console.log(pessoa[prop])

console.log('-------------------------------------')

// Formas de exibiçao de um objeto inteiro no console

console.log(pessoa)
console.table(pessoa)

console.log('-------------------------------------')

let veiculo = {}        //Objeto inicia-se vazio

// Foi criada a propriedade marca e colcoando o valor 'Volkswagen' dentro dela

veiculo.marca = 'Volkswagen'
veiculo.modelo ='Variant'
veiculo.ano = 1974
// propriedade com acento -> sintaxe dos colchetes
veiculo['combustível'] = 'gasolina'
veiculo.cor = 'azul'

console.log(veiculo)
console.table(veiculo)
// Listando todas as propriedades de um objeto
console.log('-------------------------------------')

// for . . in -> lista de tpdas as propriedades de um objeto
//Variaveis :
// prop -> a variavel que ira conter o nome de cada uma das propriedades
// do objeto (pode ser qualquer nome valido de variavel)
//pessoa -> o objeto do qual queremos kustar as propriedades

for(let prop in pessoa){

console.log(prop)

}
console.log('-------------------------------------')

for(let x in veiculo){

    console.log(x)

}
console.log('-------------------------------------')
// listando propriedades e valores do objeto veiculo com for ..in

for(let atrib in veiculo){

    console.log(atrib + ' -> ' + veiculo[atrib] )

}
console.log('-------------------------------------')

// objeto veiculo antes da exclusao da propriedade

console.table(veiculo)

console.log('-------------------------------------')

// Apagando uma propriedade de um objeto: delete

delete veiculo.ano

// objeto veiculo depois da exclusao da propriedade

console.table(veiculo)
console.log('-------------------------------------')

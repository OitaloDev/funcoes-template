/* function exercicio(nome, anoDeNascimento, anoAtual = new Date().getFullYear()){
    console.log(anoAtual);

}

exercicio()
 */



/* 
const nome = "italo" //valores que nao mudam//
nome = "Viana"
console.log(nome)
let soma = 7 + 2 
soma = 10 */

//string "quando escreve dentro das aspas é uma string"
//boleano
/* true false
pra verificar usar typeof
console.log(typeof soma) 
const num1 = 5
const num2 = 5
const returno = num1 === num2   */  




//função nomeada

/* function nomeFuncao(){ */
    //corpo da função
    //escopo

//funções anonima
/* const funcao = function () { */
    //escopo

//arrow function
/* const funcaoArrow = () => {

}
() => {

}
 */
const imprimirNome = (nome) => {
    return `Olá ${nome}`
}

//passando argumentos
const meuNome = "Italo"

console.log(imprimirNome(meuNome))
console.log(imprimirNome("Ozemela"))
imprimirNome("Teste 1")

const imprimir = function (nome) {
    console.log(`Olá ${nome}, isso é uma função não nomeada`)
}

imprimir("Deu certo")






const numeroPar = (num) => {

    const par = num % 2
    const verificarPar = par === 0
    console.log(par)
    console.log(verificarPar)

    const soma = num + 10
    console.log(soma)
    const mult = num * num
    
   
   
    return `O numero ${num} é par? ${verificarPar} somando com 10 o resultado é ${soma} e multiplicado por ele mesmo é ${mult}`
}
//armazenando o retorno da função em uma variavel.
const resultado = numeroPar(8)
console.log(resultado)

//chamadno e mostrando no console.
/* console.log(numeroPar(8)) */


const autenticar = (login, senha) => {
    const loginArmazenado = "Italo"
    const senhaArmazenada = "1234"

    const loginVerificado = loginArmazenado === login
    const senhaVerificada = senhaArmazenada === senha

    const logar = loginVerificado && senhaVerificada 

    return logar
}

console.log(autenticar("Italo", "1234"))




const guardar = (nome, anoNiver, anoAtual = new Date().getFullYear()) => {
    const id = anoAtual - anoNiver > 18
    
        
        
        return `O Meliante ${nome} é maior de idade ? ${id} `
    }
console.log(guardar("Italo", 1998))
console.log(guardar("Clark Kent de divinopolis", 2012))


const maiorIdade = (nome, anoNas, anoAtual) =>{
    const idade = anoAtual - anoNas
    console.log(idade)
    const verificaMaior = idade >= 18
    console.log(verificaMaior)
    return `${nome} é maior de idade? ${verificaMaior}`
}

console.log(maiorIdade ("Lilica", 2006, 2022))
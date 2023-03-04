//ECMAScript
//const, let, var 
// const nome1 = "Ana"
// const nome2 = "Pedro"
// const nome3 = "José"

// console.log(typeof(nome1))
// console.log(typeof(nome2))
// console.log(typeof(nome3))
//REPL : Read, Evaluate, Print, Loop

// let a = 2 
// let b = 'abc'
// console.log(typeof(b))
// b = 12 
// console.log(typeof(b))
// b = true
// console.log(typeof(b))

// var endereco = "Rua C"
// console.log(endereco)
// endereco = "Rua B"
// console.log(endereco)
// console.log(typeof(endereco))

// var linguagem = "JavaScript"
// console.log("Aprendendo"+ " " + linguagem)
// linguagem = "Java"
// console.log("Aprendendo"+ " " + linguagem)

// var idade = 18
// console.log("Oi, "+ nome)
// if(idade>=18){
//     var nome = "Joao"// hoist (joga a variavel p fora do if)
//     console.log(nome + ", você pode dirigir")
// }
// console.log("Até mais, "+ nome)

// const n1 = 2 
// const n2 = '3'
// //coerção implicita
// const n3 = n1 + n2
// console.log(n3)
// //coerção explicita
// const n4 = n1 + Number(n2)
// console.log(n4)

// console.log(1 == 1)
// console.log(1 == '1')
// console.log(1 === 1)
// console.log(1 === '1')

// console.log(true == 1)
// console.log(1 == [1])
// console.log(null == null)
// console.log(null == undefined)
// console.log([] == false)
// console.log([] == [])
// console.log(new Object()== new Object())
// não se faz comparação em JS

//Aula 02 começa aqui. 04/03/23
// 1.5 vetores 

// v1 = [] 
// v1[0] = 3.4 
// v1[10] = 2
// console.log(v1)

// for(let i = 0; i<v1.lenght; i++)
//     console.log(v1[i])

//v = [2,'abc',true]
//const nomes = ['Ana Maria', "Antonio","Rodrigo","Alex","Cristina"]
//filter 
//const resultado = nomes.filter((nome)=>{return nome.startsWith("A")})
//console.log(resultado)

//arrow function
//const teste = () => {console.log("minha arrow function")}
//teste()
// function soma(a,b){
//     return a + b
// }
// console.log(soma(2,3))

// Mapeamento 
//["Ana","Pedro"] => ['A','P']
// const nomes = ['Ana Maria', "Antonio","Rodrigo","Alex","Cristina"]
// const letrasiniciais = nomes.map((nome)=>{return nome.charAt(0)})
// console.log(letrasiniciais)

// const numeros = [1,2,3,4,5]
// const n1 = numeros.map((numero)=>{return numero**2})
// console.log(n1)

// const valores = [1,2,3,4,5]
// const soma = valores.reduce((ac,v) => {return ac + v})
// console.log(soma)


// Funções de JavaScript

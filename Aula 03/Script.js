// Continuação da aula 02 

// let umaFuncao = function(){
//     console.log("Fui armazenada em uma variavel")
// }

// umaFuncao()

//função de alta ordem 
// f(function(){
//     console.log("Estou sendo passada para f")
// })
// function f (funcao){
//     funcao()
// }

// function g(){
//     function outraFuncao(){
//         console.log("Fui criada por g");
//         return function(){
//             console.log("Até logo!");
//         }
//     }
//     return outraFuncao
// }

// f(g()())
// f(g)
// f(g())

// const gresult = g()
// gresult()

// g()() // igual a de cima 

// g()()()  mesma coisa que escrever undefined()

// function f(){
//     let nome = "Matheus"
//     function g(){
//         console.log(nome);
//     }
//     g()
// }
// f()

// function saudacoesFactory (saudacao,nome){
//     return function(){
//         console.log(saudacao + ", " + nome);
//     }
// }
// let olaMatheus = saudacoesFactory("Olá","Matheus")
// let tchauMatheus = saudacoesFactory("Tchau","Matheus")
// olaMatheus()
// tchauMatheus()

// function eAgora(){
//     let cont = 1 
//     function f1(){
//         console.log(cont);
//     }
//     cont++
//     function f2(){
//         console.log(cont);
//     }
//     return{f1,f2}
// }

// let eAgoraResult = eAgora()
// eAgoraResult.f1()
// eAgoraResult.f2() 

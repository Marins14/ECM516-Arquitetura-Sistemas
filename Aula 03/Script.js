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


//Inicio apostila 02 

// Objetos literais JavaScript 
//(JSON) JavaScript Object Notation 

// A pessoa se chama Matheus e tem 21 anos 
// let pessoa = {
//     nome: "Matheus",
//     idade: 21
// }
// //. e [""]
// console.log(pessoa.nome); 
// console.log(pessoa["idade"]);


// uma pessoa que se chama maria tem 21 anos e mora na rua B, numero 121
// let pessoa = {
//     nome: "Maria",
//     idade: 21,
//     endereco: {
//         logradouro: "Rua B",
//         numero: 121
//     }
// }

// console.log(pessoa["nome"]+" "+ pessoa["idade"]+" "+ pessoa.endereco["logradouro"]+" "+pessoa.endereco["numero"]);

// uma concessionaria tem CNPJ endereco ( logradouro,numero). E possui 3 veiculos no seu estoque, cada veiculo tem modelo,marca e ano de fabricação

// let concessionaria = {
//     CNPJ: 12345678,
//     endereco: {
//         logradouro: "Rua C",
//         numero: 456
//     },
//     estoque: {
//         veiculo1: {
//             modelo: "Celta",
//             marca: "GM",
//             ano: 2004
//         },
//         veiculo2: {
//             modelo: "Fiesta",
//             marca: "Ford",
//             ano: 2015
//         },
//         veiculo3: {
//             modelo: "March",
//             marca: "Nissan",
//             ano: 2017
//         },
//     }
// }
// console.log(concessionaria.CNPJ +" "+concessionaria.endereco.logradouro+" "+concessionaria.endereco.numero +" "+concessionaria.estoque.veiculo1.modelo+" "+concessionaria.estoque.veiculo1.marca+" "+concessionaria.estoque.veiculo1.ano);

// let concessionaria = {
//     CNPJ: 12345678,
//     endereco: {
//         logradouro: "Rua C",
//         numero: 456
//     },
//     veiculos: [
//         {
//             marca: "GM",
//             modelo: "Celta",
//             ano: 2004
//         },
//         {
//             marca: "Volkswagen",
//             modelo: "Fusca",
//             ano: 1973
//         },
//         {
//             marca: "Ford",
//             modelo: "Fiesta",
//             ano: 2015
//         }
//     ]
// }
// for (let veiculo of concessionaria.veiculos){
//     console.log(veiculo.marca,veiculo.modelo,veiculo.ano);
// }

// Calculadora que soma dois valores e subtrai um valor de outro 
let calc = {
    soma: (a,b) =>  a+b,
    subtracao: function(a,b){
        return a-b
    }
}
console.log(calc.soma(2,3));
console.log(calc["subtracao"](5,2));
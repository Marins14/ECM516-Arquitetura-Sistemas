// console.log('Eu primeiro');
// console.log("Agora eu ");
// console.log("Sempre serei a ultima");

// const a = 2 + 7
// const b = 5
// console.log(a+b);

// function demorada(){
//     const atualMaisDoisSegundos = new Date().getTime()+2000
//     while(new Date().getTime() <= atualMaisDoisSegundos);// no-op 
//     const d = 8+4
//     return d; 
// }
// const a = 2+3
// const b = 5+9 
// setTimeout(()=>{
//     const d = demorada();
//     console.log("d "+ d);
// },0) //realiza a função de forma assincrona 
// const e = 2 + a + b;
// const dataMais10segundos = new Date().getTime()+10000
// while(new Date().getTime() <= dataMais10segundos);
// console.log("e:" +e);

// //Callback hell ↓
// const fs = require ('fs')
// const abrirArquivo = (nomeArquivo) =>{
//     const exibirConteudo = (erro,conteudo) => {
//         if(erro)
//             console.log("Erro: "+ erro);
//         else{
//             console.log("Conteudo: "+ conteudo.toString());
//             const resultado = +conteudo.toString() * 2
//             const finalizar = (erro) =>{
//                 //condição ? v1 : v2 operador ternario 
//                 console.log(erro ? "Erro: "+ erro : "Escrita ok");
//             }
//             fs.writeFile('dobro.txt',resultado.toString(),finalizar)
//         }
//     }
//     fs.readFile(nomeArquivo,exibirConteudo)
// }
// // abrirArquivo('arquivo.txt')

// function calculoDemorado(n){
//     const p = new Promise(function(resolve,reject){
//         let res = 0 
//         for(let i = 1;i <= n; i++) res+=i
//         resolve(res)
//     })
//     return p 
// }

// const minhaPromisse = calculoDemorado(10) 

// minhaPromisse.then((resultado)=>{console.log(resultado)})

// function calculoRapidin(n){
//     return Promise.resolve((n*(n+1))/2)
// }

// const pConcluido = calculoRapidin(10)
// pConcluido.then((resul)=>{console.log(resul)})

// //reescrever a função calculoRapidinh sem usar o atalho promise.resolve 

// function calculoRapidin2(n){
//     const p2 = new Promise(function(resolve,reject){
//         let res = 0
//         for(let i = 1;i <= n; i++) res+=i
//         resolve(res)
//     })
//     return p2 
// }
// const p2Promisse = calculoRapidin2(10) 

// p2Promisse.then((res)=>{console.log(res)})



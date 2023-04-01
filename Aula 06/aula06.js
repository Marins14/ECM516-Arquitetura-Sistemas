// async function hello(nome){
//     return `Olá , ${nome}`
// }
// console.log(hello("João"))

// hello("João").then(res=> console.log(res))

function fatorial(n){
    if(n<0) return Promise.reject("n não pode ser negativo")
    let res = 1
    for(let i=2; i<=n;i++) res *= i;
    return Promise.resolve(res)
}

function chamadaComThenCatch(){
    fatorial(5)
    .then(res=> console.log("Ok" + res))
    .catch(err=> console.log("Erro" + err))
    
    fatorial(-10)
    .then(res=> console.log("Ok" + res))
    .catch(err=> console.log("Erro"+err))
}

//await e Async vieram p quebrar o then e catch, só pode usar await se a function foi async
async function chamadaComAsyncAwait(){
    try{
        const f1 = await fatorial(5)
        console.log(f1)
        const f2 = await fatorial(-10)
        console.log(f2)
    }
    catch(e){
        console.log("No Catch:" + e)
    }
}
chamadaComAsyncAwait()

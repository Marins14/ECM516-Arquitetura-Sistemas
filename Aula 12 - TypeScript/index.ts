//console.log('oi');

// Declaraçao de variaveis
//let n: string 
//n = 10
//n = "abc"
//console.log(n);
// Voltar neste exemplo!
// let pessoa = function(idade: number){
//     idade = idade
//     this.fazerAniversario = function(){
//         this.idade++
//         console.log(this.idade)
//     }
//     this.fazerAniversarioComArrowFunction = () => {
//         this.idade++
//         console.log(this.idade);
//     }
// }
// let p = new pessoa(10)
// setTimeout(p.fazerAniversario, 100)
// setTimeout(p.fazerAniversarioComArrowFunction, 100)

// function obterMedia(a:number, b:number, c ?:number){
//     return a + b + (c ? c : 0 )/(c ? 3 : 2)   //use um ternario para somar c ou 0
// }
// console.log(obterMedia(10, 8, 9));
// console.log(obterMedia(10, 8));
// //console.log(obterMedia(10, 8, 9, 10));

// function obterMedia(...a:number[]): number{
//     let total = 0
//     for(let i =0; i<a.length; i++){
//         total += a[i]
//     }
//     return total/(a.length === 0 ? 1 : a.length)
// }

// console.log(obterMedia());
// console.log(obterMedia(10, 8));
// console.log(obterMedia(10, 8, 9, 10));

// interface IEstudante{
//     id:number;
//     nome:string;
//     formando?: boolean;
// }
// function exibirEstudante(e:IEstudante){
//     console.log(e);
// }

// const e1: IEstudante = {id:1, nome:'Jonas', formando: true}
// const e2: IEstudante = {id:2, nome:'Joao'}
// exibirEstudante(e1)
// exibirEstudante(e2)

// class Estudante{
//     private nome: string 

//     constructor(nome : string){
        
//         this.nome = nome
//     }

//     exibir(): void{
//         console.log(this.nome);
//     }
// }
// //new Estudante()
// class EstudanteEspecial extends Estudante{
//     constructor(nome: string){
//         super(nome)
//     }
// }
// new EstudanteEspecial('Jonas').exibir()
// console.log(new EstudanteEspecial("Jonas"))

// class Pessoa{
//     private cpf: string;
//     readonly idade: Number;

//     constructor(cpf: string, idade: number){
//         this.cpf = cpf
//         this.idade = idade;
//     }
//     public getCpf(): string{
//         return this.cpf
//     }
//     public setCpf(cpf: string): void{
//         this.cpf = cpf
//     }
// }
// let p: Pessoa = new Pessoa('123', 10)
// console.log(p.getCpf());
// p.setCpf('456');
// console.log(p.getCpf());

class Empregado{
    private static numeroTotal: number = 0;

    constructor(
        private primeiroNome: string,
        private sobrenome: string
    ){
        Empregado.numeroTotal++;
    }
    public static obterNumeroTotal(): number{
        return Empregado.numeroTotal
    }
}
let e1: Empregado = new Empregado('Jonas', 'Silva')
let e2: Empregado = new Empregado('Joao', 'Silva')
console.log(e1,e2,Empregado.obterNumeroTotal());
// import Singleton from './Singleton';

// for(let i = 0; i < 10; i++){
//     let singleton = Singleton.getInstance();
//     singleton.executar();
// }
const input = require('input');

import { CacheService } from "./CacheService";

const cache = CacheService.getInstance();
// cache.set('Jão');
// cache.set('Maria');
// cache.add('Jão',123456789);
// cache.get('Jão');
// cache.get('Maria');

console.log("************************************** Bem vindo a sua lista telefonica **************************************");

async function lista_telefonica(cache: CacheService) {
    const nome = await input.text(`Por favor me diga o seu nome: `);
    //const numero = await input.text(`Por favor me diga seu telefone: `);
    const numero = await input.text(`Por favor me diga seu telefone: `);
    cache.numeberAdd(nome,numero);
    const resposta = await input.text(`Deseja adicionar mais um contato? (s/n)`);
    if(resposta == 's'){
        console.log("Digite o nome e o numero do contato");
        const nome = await input.text(`Por favor me diga o seu nome: `);
        const numero = await input.text(`Por favor me diga seu telefone: `);
        cache.numeberAdd(nome,numero);
        cache.get(nome);
    }
    const resposta2 = await input.text(`Deseja ver a lista telefonica? (s/n)`);
    if(resposta2 == 's'){
        for(let i = 0; i < cache.lenght; i++){
            cache.get(nome[i]);
        }
  }
  console.log("************************************** Fim da lista telefonica ***********************************************");
}
lista_telefonica(cache);

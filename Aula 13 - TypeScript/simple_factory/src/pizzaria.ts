const readline = require('prompts');

class Pizza{
    preparar(): void{
        console.log('Preparando pizza...');
    }
    assar(): void{
        console.log('Assando pizza...');
    }
    cortar(): void{
        console.log('Cortando pizza...');
    }
    empacotar(): void{
        console.log('Empacotando pizza...');
    }
}
class PizzaDeQueijo extends Pizza{
    preparar(): void{
        console.log('Preparando pizza de queijo...');
    }
    assar(): void{
        console.log('Assando pizza de queijo...');
    }
    cortar(): void{
        console.log('Cortando pizza de queijo...');
    }
    empacotar(): void{
        console.log('Empacotando pizza de queijo...');
    }
}
// class PizzaDeGrega extends Pizza{
//     preparar(): void{
//         console.log('Preparando pizza de grega...');
//     }
//     assar(): void{
//         console.log('Assando pizza de grega...');
//     }
//     cortar(): void{
//         console.log('Cortando pizza de grega...');
//     }
//     empacotar(): void{
//         console.log('Empacotando pizza de grega...');
//     }
// }
class PizzaPeperoni extends Pizza{
    preparar(): void{
        console.log('Preparando pizza de peperoni...');
    }
    assar(): void{
        console.log('Assando pizza de peperoni...');
    }
    cortar(): void{
        console.log('Cortando pizza de peperoni...');
    }
    empacotar(): void{
        console.log('Empacotando pizza de peperoni...');
    }
}

// class PizzaDeMolusco extends Pizza{
//     preparar(): void{
//         console.log('Preparando pizza de molusco...');
//     }
//     assar(): void{
//         console.log('Assando pizza de molusco...');
//     }
//     cortar(): void{
//         console.log('Cortando pizza de molusco...');
//     }
//     empacotar(): void{
//         console.log('Empacotando pizza de molusco...');
//     }
// }
// class PizzaVegetariana extends Pizza{
//     preparar(): void{
//         console.log('Preparando pizza vegetariana...');
//     }
//     assar(): void{
//         console.log('Assando pizza vegetariana...');
//     }
//     cortar(): void{
//         console.log('Cortando pizza vegetariana...');
//     }
//     empacotar(): void{
//         console.log('Empacotando pizza vegetariana...');
//     }
// }

class PizzaDeQueijoNY extends PizzaDeQueijo{
    preparar(): void{
        console.log('Preparando pizza de queijo de NY...');
    };
    assar(): void{
        console.log('Assando pizza de queijo de NY...');
    };
    cortar(): void{
        console.log('Cortando pizza de queijo de NY...');
    };
    empacotar(): void{
        console.log('Empacotando pizza de queijo de NY...');
    };
}

class PizzDeQuejoChicago extends PizzaDeQueijo{
    preparar(): void{
        console.log('Preparando pizza de queijo de Chicago...');
    };
    assar(): void{
        console.log('Assando pizza de queijo de Chicago...');
    };
    cortar(): void{
        console.log('Cortando pizza de queijo de Chicago...');
    };
    empacotar(): void{
        console.log('Empacotando pizza de queijo de Chicago...');
    };
}

class PizzaPeperoniNY extends PizzaPeperoni{
    preparar(): void{
        console.log('Preparando pizza de peperoni de NY...');
    };
    assar(): void{
        console.log('Assando pizza de peperoni de NY...');
    };
    cortar(): void{
        console.log('Cortando pizza de peperoni de NY...');
    };
    empacotar(): void{
        console.log('Empacotando pizza de peperoni de NY...');
    };
}

class PizzaPeperoniChicago extends PizzaPeperoni{
    preparar(): void{
        console.log('Preparando pizza de peperoni de Chicago...');
    };
    assar(): void{
        console.log('Assando pizza de peperoni de Chicago...');
    };
    cortar(): void{
        console.log('Cortando pizza de peperoni de Chicago...');
    };
    empacotar(): void{
        console.log('Empacotando pizza de peperoni de Chicago...');
    };
}

class SimplePizzaFactory{
    criarPizza(tipo: string): Pizza | null{
        let pizza: Pizza | null = null;
        tipo = tipo.toLowerCase();
        if(tipo === 'queijo'){
            pizza = new PizzaDeQueijo();
        }
        else if(tipo === 'peperoni'){
            pizza = new PizzaPeperoni();
        }
        // }else if(tipo === 'grega'){
        //     pizza = new PizzaDeGrega();
        // }
        // else if(tipo === 'molusco'){
        //     pizza = new PizzaDeMolusco();
        // }
        // else if(tipo === 'vegetariana'){
        //     pizza = new PizzaVegetariana();
        // }
        return pizza;
    }
}

class SimplePizzaFactoryNY extends SimplePizzaFactory{
    criarPizza(tipo: string): Pizza | null{
        let pizza: Pizza | null = null;
        tipo = tipo.toLowerCase();
        if(tipo === 'queijo'){
            pizza = new PizzaDeQueijoNY();
        }
        else if(tipo === 'peperoni'){
            pizza = new PizzaPeperoniNY();
        }
        return pizza;
    }
}

class SimplePizzaFactoryChicago extends SimplePizzaFactory{
    criarPizza(tipo: string): Pizza | null{
        let pizza: Pizza | null = null;
        tipo = tipo.toLowerCase();
        if(tipo === 'queijo'){
            pizza = new PizzDeQuejoChicago();
        }
        else if(tipo === 'peperoni'){
            pizza = new PizzaPeperoniChicago();
        }
        return pizza;
    }
    // return tipo === 'queijo' ? new PizzaDeQueijoChicago() : tipo === 'peperoni' ? new PizzaPeperoniChicago() : null;
}

class PizzaStore{
    //private simplePizzaFactory: SimplePizzaFactory;
    constructor(private simplePizzaFactory: SimplePizzaFactory){
        //this.simplePizzaFactory = simplePizzaFactory;
    }
    PedirPizza = (tipo: string): Pizza | null => {
        let pizza: Pizza | null = null;
        pizza = this.simplePizzaFactory.criarPizza(tipo);
        pizza?.preparar();
        pizza?.assar();
        pizza?.cortar();
        pizza?.empacotar();
        return pizza;
        // este código não varia
    }

}

let franquias: PizzaStore[] = [
    new PizzaStore(new SimplePizzaFactoryNY()),
    new PizzaStore(new SimplePizzaFactoryChicago())
];

//console.log(franquias[0].PedirPizza('queijo'));

// Vamos pedir para o usuario que escolha a franquia e a pizza


(async () => {
    const response = await readline({
        type: 'text',
        name: 'franquia',
        message: 'Qual franquia você deseja? NY ou Chicago?',
        validate: (value: string) => value === 'NY' || value === 'Chicago' ? true : 'Digite NY ou Chicago'
    });
    const franquia = response.value === 'NY' ? 0 : 1;
    const sabor = await readline({
        type: 'text',
        name: 'sabor',
        message: 'Qual sabor você deseja? Queijo ou Pepperoni?',
        validate: (value: string) => value === 'queijo' || value === 'pepperoni' ? true : 'Digite Queijo ou Pepperoni'
    });
    console.log(sabor.sabor);
    const pizza = franquias[franquia].PedirPizza(sabor.sabor);
    console.log(pizza);
})();




//console.log(PedirPizza());
//let pizza: Pizza |  null = PedirPizza('molusco')
//let PizzaStore1 = new PizzaStore(new SimplePizzaFactory());
//console.log(PizzaStore1.PedirPizza('queijo'));
export interface Pato{
    quack():void;
    fly():void;
}

export interface Peru{
    gobble():void;
    fly():void;
}
export interface BeijaFlor{
    beijaFlor():void;
    fly():void;
}
export class PeruAdapter implements Pato{
    // private peru: Peru;
    // constructor(peru: Peru){
    //     this.peru = peru;
    // }
    constructor(private peru: Peru){}
    fly(): void {
        this.peru.fly();
    }
    quack(): void {
        this.peru.gobble();
    }
}

export class BeijaFlorAdpter implements Pato{
    constructor(private beijaFlor: BeijaFlor){}
    fly(): void {
        this.beijaFlor.fly();
    }
    quack(): void {
        this.beijaFlor.beijaFlor();
    }
}

export class BeijaFlorDoSul implements BeijaFlor{
    beijaFlor(): void {
        console.log("Beija Flor do Sul falando");
    }
    fly(): void {
        console.log("Beija Flor do Sul voando");
    }
}

export class PeruDoMato implements Peru{
    gobble(): void {
        console.log("Peru do Mato falando");
    }
    fly(): void {
        console.log("Peru do Mato voando");
    }
}

export class PatoBranco implements Pato{
    quack(): void {
        console.log("Pato Branco falando");
    }
    fly(): void {
        console.log("Pato Branco voando");
    }
}

export class PatoDoSul implements Pato{
    quack(): void {
        console.log("Pato do Sul falando");
    }
    fly(): void {
        console.log("Pato do Sul voando");
    }
}

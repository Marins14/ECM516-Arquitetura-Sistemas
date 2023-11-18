class Singleton{
    private static instance: Singleton;
    private constructor(){
        console.log('instância criada');
    }

    public static getInstance(): Singleton{
        if(!Singleton.instance){
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }

    public executar(): void{
        console.log('executar singleton')
    }
}
export default Singleton;
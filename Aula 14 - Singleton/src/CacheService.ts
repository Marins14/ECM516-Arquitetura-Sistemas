export class CacheService{
    private static instance: CacheService;
    private chache: Map<string,any>;

    private constructor(){
        this.chache = new Map();
    }
    public static getInstance(): CacheService{
        if(!CacheService.instance){
            CacheService.instance = new CacheService();
        }
        // !ChacheService.instance ? ChacheService.instance = new ChacheService() : ChacheService.instance;
        return CacheService.instance;
    }
    
    public set(key: string,value: any): void{
        this.chache.set(key,value);
    }
   
    // public add(key: string, []): void{
    //     this.chache.set(key.value);
    // }

    public addUser(key: string): void{
        this.chache.set(key,[]);
    }

    public numeberAdd(key: string, value: any): void{
       let number = this.chache.get(key);
        number.push(value);
        this.chache.set(key,number);
    }
    
    public get(key: string): any{
        return this.chache.get(key);
    }
    public get lenght(): number{
        return this.chache.size;
    }
    // public set(key: string, value: any): void{
    //     this.chache.set(key,value);
    // }

    // public get(key: string): any{
    //     return this.chache.get(key);
    // }
}

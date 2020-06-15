export class Animal {
    constructor(type,leg){
        this.type = type;
        this.leg = leg;
    }
    makeNoise(sound = "Loud sound"){
        console.log(sound);
    }
    get metaData(){
        return `Type :${this.type}, Leg :${this.leg}`;
    }
    static return10(){
        return 10;
    }
}
export class Cat extends Animal {
    constructor(type="cat",leg=4,tail = true){
        super(type,leg);
        this.tail = tail;
    }
    makeNoise(sound = "Meow"){
        super.makeNoise(sound);
    }
    get metaData(){
        return `Type :${this.type}, Leg :${this.leg}, Tail :${this.tail}`;
    }
}

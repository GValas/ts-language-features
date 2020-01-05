
class Animal {

    constructor(private name: string) { }

}

class Bird extends Animal {
    fly() {
        console.log('fly')
    }
}

class Fish extends Animal {
    swim() {
        console.log('swim')
    }
}




const f = new Fish('orca')
f.swim()
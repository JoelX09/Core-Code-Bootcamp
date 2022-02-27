abstract class Animal2 {
    abstract name: string
    age = -1

    constructor() {}

    abstract feed(food: string, amount: number): void
}

class Cat2 extends Animal2 {
    name: string
    constructor(name: string, age: number) {
        super()
        this.name = name
        this.age = age
    }

    feed(food: string, amount: number): void {
        console.log(
            'Feeding ' +
                this.name +
                ' the Cat ' +
                amount +
                ' kg of ' +
                food
        )
    }
}

class Dog2 extends Animal2 {
    name: string
    constructor(name: string, age: number) {
        super()
        this.name = name
        this.age = age
    }

    feed(food: string, amount: number): void {
        console.log(
            'Feeding ' +
                this.name +
                ' the Dog ' +
                amount +
                ' kg of ' +
                food
        )
    }
}

const CAT2 = new Cat2('Cosmo', 8)
const DOG2 = new Dog2('Rusty', 12)
CAT2.feed('Fish', 0.1)
DOG2.feed('Beef', 0.25)

/* Output
Feeding Cosmo the Cat, 0.1 kg of Fish
Feeding Rusty the Dog, 0.25 kg of Beef
*/
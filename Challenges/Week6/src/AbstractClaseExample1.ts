abstract class Animal1 {
    abstract name: string
    age: number

    constructor(age: number) {
        //this.name = name // this must now be assigned in the derived class instead
        this.age = age
    }

    feed(food: string, amount: number): void {
        console.log(
            'Feeding ' +
                this.name +
                ' the ' +
                this.constructor.name +
                ' ' +
                amount +
                ' kg of ' +
                food
        )
    }
}

class Cat1 extends Animal1 {
    name: string
    constructor(name: string, age: number) {
        super(age)
        this.name = name
    }
}

class Dog1 extends Animal1 {
    name: string
    constructor(name: string, age: number) {
        super(age)
        this.name = name
    }
}

const CAT1 = new Cat1('Cosmo', 8)
const DOG1 = new Dog1('Rusty', 12)
CAT1.feed('Fish', 0.1)
DOG1.feed('Beef', 0.25)

/* Output
Feeding Cosmo the Cat, 0.1 kg of Fish
Feeding Rusty the Dog, 0.25 kg of Beef
*/
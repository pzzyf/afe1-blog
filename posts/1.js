

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    running() {
        console.log('person running')
    }
}

class Student extends Person {
    constructor(name, age, suo) {
        super(name, age)
        this.suo = suo
    }
    running() {
        super.running()
        console.log('afe1 running')
    }
}

const afe1 = new Student('afe1', 18, '123')

console.log(afe1.running())

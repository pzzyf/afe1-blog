


let a = {
    name: 'afe1',
    age: 18,
    frends: {
        one: 'kun',
        tow: 'liang',
        three: 'bo'
    }
}

let b = JSON.parse(JSON.stringify(a))

b.frends.three = '123'

console.log(a)
console.log(b)

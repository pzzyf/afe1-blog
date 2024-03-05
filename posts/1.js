let a = [1, 6, 3, 4, 5]

let b = a.sort((a1, b1) => {
    return b1 - a1
})

console.log(a, b)

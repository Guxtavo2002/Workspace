//Exercício - 1
var unidimensional = ["HTML", 1993, "CSS", 1996, "Bootstrap", 2011, "JS", 1995, "React", 2013, "Java", 1995]

console.log(unidimensional)
console.log(unidimensional.length)
console.log(unidimensional[6])

let transformandoString = unidimensional.toString()
console.log(transformandoString)

let trocandoASeparacao = unidimensional.join("/")
console.log(trocandoASeparacao)

let acrescentandoComeco = unidimensional.unshift("IOS")
console.log(acrescentandoComeco)

//Exercício - 2

var bidimensional =[
    ["HTML", 1993, "CSS", 1996,],
    ["Bootstrap", 2011, "JS", 1995,],
    ["React", 2013, "Java", 1995]
]

console.log(bidimensional)

console.log(bidimensional.length)

console.log(bidimensional[2][1])

bidimensional [1][2] = "JavaScript"
console.log(bidimensional)

delete bidimensional [2][2]
console.log(bidimensional)

let novaInformacao = bidimensional.push("pipoca")
console.log(bidimensional)




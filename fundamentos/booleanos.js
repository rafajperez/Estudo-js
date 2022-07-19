let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)
// !!true é true !!false é false, !true é false, !false é true//

console.log(!!3)
console.log(!!-1)
console.log(!!" ")
console.log( !![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))
//todos esses resolvem para true//

console.log(!!0)
console.log(!!" ")
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))
console.log(!!("" || null || 0 || ""  ))

// todos esses forçam para resolver em false//

let nome = "Lucas"
console.log(nome || "Desconhecido")
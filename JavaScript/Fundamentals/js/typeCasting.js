let valueBool = true
let valueBool2 = Boolean()

let vlueNumber = 12
let valueNumber2 = Number()

let valueBig = 12000000000n
let valueBig2 = BigInt(12)

let valueString = "Hello"
let valueString2 = String("Hello")

let u = undefined

console.log(`${valueBool} [${typeof valueBool2}]`)
console.log(`${vlueNumber} [${typeof valueNumber2}]`)
console.log(`${valueBig} [${typeof valueBig}]`)
console.log(`${valueString} [${typeof valueString}]`)

let value = "1234"
console.log(typeof value)
value = value - 1
console.log(typeof value)
console.log(value)
value = BigInt(value)
console.log(typeof value)
console.log(value)
value = Boolean(value)
console.log(typeof value)
console.log(value)

let b = Boolean( BigInt(Number("1234")));
console.log(`${b} [${typeof b}]`);









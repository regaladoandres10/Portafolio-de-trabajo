
const priceRose = 8
const priceLily = 10
const priceTulip = 2

let quantityRose = 20
let quantityLily = 30
let quantityTulip = 120

let valueRose = priceRose * quantityRose
let valueLily = priceLily * quantityLily
let valueTulip = priceTulip * quantityTulip

let total = valueRose + valueLily + valueTulip

console.log("Rose – unit price: " + priceRose + ", quantity: " + quantityRose + " , value: " + valueRose)
console.log("Lily  – unit price: " + priceLily + ", quantity: " + quantityLily + " , value: " + valueLily)
console.log("Tulip  – unit price: " + priceTulip + ", quantity: " + quantityTulip + " , value: " + valueTulip)
console.log("Total: " + total)

// Función

/*
function printInfoflowers(name, price, quantity) {
    let value = price * quantity
    console.log(name, " – unit price: " + price + ", quantity: " + quantity + " , value: " + value)
    return value
}

let valueRose = printInfoflowers("Rose", 8, 70)
let valueLily = printInfoflowers("Lily", 10, 50)
let valueTulip = printInfoflowers("Tulip", 2, 120)
let total = valueRose + valueLily + valueTulip

console.log("Total: ", total)
*/
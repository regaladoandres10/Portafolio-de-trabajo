let books = [
    {
        title: "Speaking JavaScript",
        author: "Axel Rauschmayer",
        pages: 460
    },
    {
        title: "Programming JavaScript Applications",
        author: "Eric Elliott",
        pages: 254
    },
    {
        title: "Understanding ECMAScript 6",
        author: "Nicholas C. Zakas",
        pages: 352
    }
]

books.push(
    {
        title: "Learning JavaScript Design Patterns",
        author: "Addy Osmani",
        pages: 254
    }
)

console.log(books.length)
console.log(books[0].title)
console.log(books[1].title)
console.log(books[2].title)
console.log(books[3].title)

let newBooks = books.slice(-2)
console.log(newBooks)

//Delete first book
books.shift()
console.log(books.length);
console.log(books[0].title);
console.log(books[1].title);
console.log(books[2].title);

let accountPages = books[0].pages + books[1].pages + books[2].pages
console.log(`Account books is: ${accountPages}`)

let books = []
let id = 0

module.exports = {
    read: (req, res){
        res.status(200).send(books)
    },
    create: (req,res){
        //add a new book from the request body to the books array. when finished should return all the books
        //obj deconstruction
        const { title, author } = req.body
        let book = {
            id: id,
            title: title,
            author: author
        }
        books.push(book)
        id++
        res.status(200).send(books)
    },
    update: (req,res){
        //this method should find a specific book based on id that you will get from the params obj.
        //Once the book is found, update book with new information you'll get off of the request body
        let index = null
        books.forEach((book, i) => {
            if(book.id === +(req.params.id)) index = i
        })
        books[index] = {
            id: books[index].id,
            title: req.body.title || books[index].title,
            author: req.body.author || books[index].author
        }
        res.status(200).send(books)
    },
    delete: (req,res){
       let index = null
       books.forEach((book, 1) => {
           if(book.id === +(req.params.id)) index = i
       }) 
       books.splice(index,1)
       res.status(200).send(books)
    }
}
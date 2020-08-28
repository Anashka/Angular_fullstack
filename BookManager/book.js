//Book Business Logic

let Book=function(id,title,coverpageurl=null,author=null,price=null,rating=null){

    this.id=id;
    this.title=title;
    this.coverpageurl=coverpageurl;
    this.author=author;
    this.price=price;
    this.rating=rating;
}
Book.prototype.toString=function(){
    return `Book[${this.id},${this.title}]`;
};

let BookManager=function(){
    this.books=[]; //an empty list of books;
};

BookManager.prototype.addBook=function(book){
    if( book && book.id && book.title )
        this.books.push(book);
};

BookManager.prototype.getAllBooks=function(){
    return this.books;
};

BookManager.prototype.getBookById=function(id){

    for(let book of this.books)
        if (book.id===id){
            return book;
        }
    return null;
};

BookManager.prototype.remove=function(id){

    let newList=[]
    for(let book of this.books){
        if(book.id!==id)
            newList.push(book);
    }
    this.books = newList;
}





function showBooks(books, heading=null){
    console.log(heading);
    for(let book of books){
        console.log(`${book}`);
    }
}




//----- my application logic here ---

let manager=new BookManager();

manager.addBook(new Book('novel','Lost Epic Series'));
manager.addBook(new Book('fiction',' fictions'));
manager.addBook(new Book('novel','yayathi'));


showBooks(manager.getAllBooks(), 'List of All Books');

console.log('book with id novel', manager.getBookById('novel'));
console.log('book with id fiction', manager.getBookById('fiction'));



//showAuthors(manager.getAllBooks(), 'List after deleting Archer');
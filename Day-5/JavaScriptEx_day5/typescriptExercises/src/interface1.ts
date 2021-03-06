let http = require("http");

// Interface 1
// a
interface IBook {
    title: string;
    readonly author: string;
    published?: Date;
    pages?: number;
}

// b
function logger(b: IBook) {
    //console.log(`Title: ${b.title}, Author: ${b.author}, Published: ${b.published}, Pages: ${b.pages}`);
    console.log(b);
}

const book1: IBook = {
    title: "Hobbitten",
    author: "J.R.R. Tolkien",
    published: new Date(),
    pages: 256
}

// c
/**
 * "Duck typing in computer programming is an application of the duck 
 * test—"If it walks like a duck and it quacks like a duck, then it must 
 * be a duck"—to determine whether an object can be used for a particular 
 * purpose. With normal typing, suitability is determined by an object's type. 
 * In duck typing, an object's suitability is determined by the presence of 
 * certain methods and properties, rather than the type of the object itself.[1][2] "
 */

// d
const book2: IBook = {
    title: "Hobbitten",
    author: "J.R.R. Tolkien",
    pages: 256
}

const book3: IBook = {
    title: "Hobbitten",
    author: "J.R.R. Tolkien"
}

logger(book1);
logger(book2);
logger(book3);

// f
class Book implements IBook {
    //private _title : string;
    #title: string
    #author: string
    #published: Date
    #pages: number
    constructor(title: string,
        author: string,
        published: Date,
        pages: number) {
        this.#title = title
        this.#author = author
        this.#published = published
        this.#pages = pages
    }
    get title(): string { return this.#title }
    set title(title: string) { this.#title = title }
    get author(): string { return this.#author }
    set author(author: string) { this.#author = author }
    get published(): Date { return this.#published }
    set published(published: Date) { this.#published = published }
    get pages(): number { return this.#pages }
    set pages(pages: number) { this.#pages }
    toString(): string { return this.title + this.author + this.published + this.pages }
}

let b1 = new Book("Hobbitten","J.R.R. Tolkien",new Date(),256);
console.log(b1.toString());
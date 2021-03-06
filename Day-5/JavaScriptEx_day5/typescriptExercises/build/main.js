"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _title, _author, _published, _pages;
let http = require("http");
// b
function logger(b) {
    //console.log(`Title: ${b.title}, Author: ${b.author}, Published: ${b.published}, Pages: ${b.pages}`);
    console.log(b);
}
const book1 = {
    title: "Hobbitten",
    author: "J.R.R. Tolkien",
    published: new Date(),
    pages: 256
};
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
const book2 = {
    title: "Hobbitten",
    author: "J.R.R. Tolkien",
    pages: 256
};
const book3 = {
    title: "Hobbitten",
    author: "J.R.R. Tolkien"
};
logger(book1);
logger(book2);
logger(book3);
class Book {
    constructor(title, author, published, pages) {
        //private _title : string;
        _title.set(this, void 0);
        _author.set(this, void 0);
        _published.set(this, void 0);
        _pages.set(this, void 0);
        __classPrivateFieldSet(this, _title, title);
        __classPrivateFieldSet(this, _author, author);
        __classPrivateFieldSet(this, _published, published);
        __classPrivateFieldSet(this, _pages, pages);
    }
    get title() { return __classPrivateFieldGet(this, _title); }
    set title(title) { __classPrivateFieldSet(this, _title, title); }
    get author() { return __classPrivateFieldGet(this, _author); }
    set author(author) { __classPrivateFieldSet(this, _author, author); }
    get published() { return __classPrivateFieldGet(this, _published); }
    set published(published) { __classPrivateFieldSet(this, _published, published); }
    get pages() { return __classPrivateFieldGet(this, _pages); }
    set pages(pages) { __classPrivateFieldGet(this, _pages); }
    toString() { return this.title + this.author + this.published + this.pages; }
}
_title = new WeakMap(), _author = new WeakMap(), _published = new WeakMap(), _pages = new WeakMap();
let b1 = new Book("Hobbitten", "J.R.R. Tolkien", new Date(), 256);
console.log(b1.toString());
//# sourceMappingURL=main.js.map
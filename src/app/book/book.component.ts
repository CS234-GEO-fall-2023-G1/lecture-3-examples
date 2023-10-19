import { Component } from '@angular/core';
import { Book } from '../shared/models/book-model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {

  book: Book;

  // bookList: Book[];

  // calsses: {[key: string]: boolean};

  constructor(){
    this.book = {title: "Title", author: "Author", pages: 100, isInStock: false};

    // this.bookList = [
    //   {title: "Title", author: "Author", pages: 100, isInStock: true},
    //   {title: "Title2", author: "Author2", pages: 200, isInStock: false},
    //   {title: "Title3", author: "Author3", pages: 300, isInStock: true}
    // ]

    // this.calsses = {
    //   'in-stock': this.book.isInStock,
    //   'out-of-stock': !this.book.isInStock,
    //   'thin-book': this.book.pages > 200
    // }
  }
}

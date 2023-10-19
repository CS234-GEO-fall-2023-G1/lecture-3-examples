import { Component } from '@angular/core';
import { Book } from '../shared/models/book-model';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  book: Book;
  bookList: Book[];

  title: string;
  
  constructor(){
    this.book = {title: "Title", author: "Author", pages: 100, isInStock: false};
 
    this.bookList = [
      {title: "Title", author: "Author", pages: 100, isInStock: true},
      {title: "Title2", author: "Author2", pages: 200, isInStock: false},
      {title: "Title3", author: "Author3", pages: 300, isInStock: true}
    ]
  }

  getTitle(event){
    console.log(event);
    this.title = event;
  }

  addBook(){
    let newBook: Book = {
      title: "NewTitle",
      author: "NewAuthor",
      pages: 400,
      isInStock: true
    }

    this.bookList.push(newBook);
  }
}

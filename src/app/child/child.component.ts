import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../shared/models/book-model';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input() childBook: Book;
  @Output() onClick = new EventEmitter<string>;
  
  constructor(){
    
  }
  
  onButton(title){
    this.onClick.emit(title);
    console.log(title);
  }
}

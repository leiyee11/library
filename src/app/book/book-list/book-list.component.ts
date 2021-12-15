import { Component, OnInit, Input, OnChanges,Output, EventEmitter } from '@angular/core';
import { BookService } from 'src/app/entities/book/book.service';
import { BookModel } from 'src/app/entities/book/book.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Array<BookModel> = [];
  @Input() allBooks: BookModel = null;
  @Output() bookId = new EventEmitter<any>();

  constructor(protected bookService: BookService) { }

  ngOnInit(): void {
    console.log("this.allBooks>>",this.allBooks)
  }
  read(id: string) {
    this.bookId.emit(id);
  }

  
}

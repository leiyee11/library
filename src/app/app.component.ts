import { Component, OnInit } from '@angular/core';
import { StatusService } from './shared/status.service';
import { IProduct } from './entities/product/product.model';
import { BookModel } from './entities/book/book.model';
import { BookService } from 'src/app/entities/book/book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Library';
  status = 'DOWN';
  createdProduct: IProduct = null;
  allBooks: BookModel = null;
  bookById: BookModel = null;
  // book: Book = new Book();
  constructor(
    protected statusService: StatusService,
    protected bookService: BookService,
  ) { }

  // Get the server status when starting the view.
  ngOnInit() {
    console.log("allBooks>>",this.allBooks)
    this.statusService
      .getStatus()
      .then((result: any) => {
        this.status = result.status;
      });

    this.bookService
      .getAllBook()
      .then((result: any) => {
        this.allBooks = result;
      });
    
  }

  
  // searchBook(val){
  //   const id = val;

  //   this.bookService.get(id).subscribe(
  //     data => {
  //       this.bookById = data;
  //       console.log("bookById>>",this.bookById)
  //     }
  //   );
  // }
  searchBook(val){
    console.log("search val>>",val)
      if(val != null || val != ''){
        this.bookService.readBook(val).then((result: any) => {
          console.log("books by id>>",result)
          this.bookById = result;
      });
      }
  }

}

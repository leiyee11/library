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
        console.log("status>>",result)
        this.status = result.status;
      });

    this.bookService
      .getAllBook()
      .then((result: any) => {
        console.log("books>>",result)
        this.allBooks = result;
      });
  }

  // Get the new product created.
  onCreatedProduct(createdProduct: IProduct) {
    this.createdProduct = createdProduct;
  }

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

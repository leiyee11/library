import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Compiler } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
// import { HttpClient } from '@angular/common/http';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BookListComponent } from './book/book-list/book-list.component';
import { BookCreateComponent } from './book/book-create/book-create.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductCreateComponent,
    BookListComponent,
    BookCreateComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    // HttpClient,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

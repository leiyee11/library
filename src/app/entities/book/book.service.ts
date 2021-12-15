import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BookModel } from './book.model';

@Injectable({
    providedIn: 'root'
})
export class BookService {
    private booksUrl = '/api/books';

    constructor(private http: Http) { }

    // Get books
    getAllBook(): Promise<Array<BookModel>> {
        return this.http.get(this.booksUrl)
            .toPromise()
            .then(response => response.json())
            .catch(this.error);
    }

    // // Create product
    // create(product: Product): Promise<IProduct> {
    //     return this.http.post(this.productsUrl, product)
    //         .toPromise()
    //         .then(response => response.json())
    //         .catch(this.error);
    // }

    //Read a product
    readBook(id: string): Promise<any> {
        console.log("readbook func>>",this.booksUrl)
        return this.http.get(`${this.booksUrl}/${id}`).toPromise()
            .then(response => response.json())
            .catch(this.error);
    }

    // Error handling
    private error(error: any) {
        let message = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(message);
    }
}

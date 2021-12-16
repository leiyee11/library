import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BookModel } from './book.model';
// import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class BookService {
    private booksUrl = '/api/books';

    constructor(
        private http: Http,
        // private httpClient: HttpClient
    ) { }

    // Get books
    getAllBook(): Promise<Array<BookModel>> {
        return this.http.get(this.booksUrl)
            .toPromise()
            .then(response => response.json())
            .catch(this.error);
    }


    readBook(id: string): Promise<any> {
        console.log("readbook func>>",this.booksUrl)
        return this.http.get(`${this.booksUrl}/${id}`).toPromise()
            .then(response => response.json())
            .catch(this.error);
    }
    // get(bookId: string): Observable<BookModel> {
    //     const bookDetailsUrl = `${this.booksUrl}/${bookId}`;
    //     return this.http.get<BookModel>(bookDetailsUrl);
    // }

    // Error handling
    private error(error: any) {
        let message = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(message);
    }
}

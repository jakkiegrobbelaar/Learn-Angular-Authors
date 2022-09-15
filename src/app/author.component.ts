import { BooksService } from './books.service';
import { Component } from "@angular/core";

@Component({
    selector: 'author',
    template: `
        <h2>{{ books.length }} Authors</h2>
        <ul>
            <li *ngFor="let book of books" >
                {{book}}
            </li>
        </ul>
        `
})

    

export class AuthorComponent{
    title = 'List of Books';
    books: any;
    
    constructor(service: BooksService){
        this.books = service.getBooks();
        

    }
}
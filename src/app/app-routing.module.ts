import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookListComponent } from '../app/book/book-list/book-list.component';
import { BookCreateComponent } from '../app/book/book-create/book-create.component';
import { AppComponent } from '../app/app.component';



const routes: Routes = [
  { path: 'bookcreate', component: BookCreateComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


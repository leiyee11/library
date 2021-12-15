import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';
// import { from } from 'rxjs';

// import { BookListComponent } from '../app/home/book-list/book-list.component';

// const routes: Routes = [
  
//   {
//     path: '',
//     component: BookListComponent,
//     children: [
//       {
//         path: '',
//         component: AppHomeControllerComponent
//       },
//       {
//         path: 'page-not-found',
//         component: PageNotFoundControllerComponent
//       },
//       {
//         path: 'search/:keyword',
//         component: SearchResultControllerComponent
//       },
//       {
//         path: 'teacher/:teacherid',
//         component: TeacherProfileControllerComponent
//       },
//       {
//         path: 'login',
//         component: LoginControllerComponent
//       },
//       {
//         path: 'liveclasses',
//         component: LiveClassesHomeControllerComponent
//       },
//       {
//         path: ':id',
//         component: TopicHomeControllerComponent
//       },
//       {
//         path: ':topicid/:skillid/:flowid',
//         component: PlaylistDetailsControllerComponent
//       },
//       {
//         path: ':topicid/:skillid',
//         component: SkillsDetailsControllerComponent
//       }
//     ]
//   },
//   {
//     path: '**',
//     redirectTo: 'page-not-found'
//   }
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }


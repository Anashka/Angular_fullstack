import {Route} from '@angular/router'; 
import {BookListComponent} from './book-list/book-list.component'; 
import {BookCompositeComponent} from './book-composite/book-composite.component'; 
import {AuthorCompositeComponent} from './author-composite/author-composite.component'; 
import {BookInfoComponent} from './book-info/book-info.component'; 
import {AuthorInfoComponent} from './author-info/author-info.component'; 
import {CaNotFoundComponent} from './ca-not-found/ca-not-found.component'; 
import { BookCreateComponent } from './book-create/book-create.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { UserManagementModule } from './user-management/user-management.module';
import { AddAuthorComponent } from './add-author/add-author.component';
import {AuthorListComponent} from './author-list/author-list.component'; 
import { AuthorDetailsComponent } from './author-details/author-details.component';
import { AuthorDeleteComponent } from './author-delete/author-delete.component';
import { BookDeleteComponent } from './book-delete/book-delete.component';




export const appRoutes:Route[]=[
    
    {path: '', pathMatch:'full', component:BookCompositeComponent},

    {path: 'book/list', component: BookListComponent },

    {path: 'author/list', component: AuthorListComponent },

    {path: 'book/add', component: BookCreateComponent},

    {path: 'author/add', component: AddAuthorComponent},

    {path: 'book/delete', component: BookDeleteComponent},

    {path: 'author/delete', component: AuthorDeleteComponent},
    
    {path: 'book/details/:bookId', component:BookDetailsComponent},
    {path: 'author/details/:authorId', component:AuthorDetailsComponent},

    {path:'user', loadChildren:()=>UserManagementModule },

    {path: '404', component:CaNotFoundComponent},

   //define a catch all route. must be your last route
   //no other routes would be processed after this one
    {path:'**', component:CaNotFoundComponent}

];


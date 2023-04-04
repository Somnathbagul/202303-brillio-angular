import { AuthorDetailsScreenComponent } from "./components/author-details-screen/author-details-screen.component";
import { AuthorListScreenComponent } from "./components/author-list-screen/author-list-screen.component";
import { BookAddComponent } from "./components/book-add/book-add.component";
import { BookListComponent } from "./components/book-list/book-list.component";
import { UserLoginScreenComponent } from "./components/user-login-screen/user-login-screen.component";
import { UserRegisterScreenComponent } from "./components/user-register-screen/user-register-screen.component";
import { HomeScreenComponent } from "./components/home-screen/home-screen.component";

import { Route } from "@angular/router";
import { E404ScreenComponent } from "./components/e404-screen/e404-screen.component";
import { AuthorAddScreenComponent } from "./components/author-add-screen/author-add-screen.component";
import { BookDetailsScreenComponent } from "./components/book-details-screen/book-details-screen";
const appRoute: Route[]=[
    
    {path:'', component:HomeScreenComponent},
    
    { path: 'book/list', component: BookListComponent},
    { path: 'book/add', component: BookAddComponent},
    { path: 'book/details/:id', component: BookDetailsScreenComponent},

    {path:'author/list', component: AuthorListScreenComponent},
    {path:'author/add', component: AuthorAddScreenComponent},
    {path:'author/details/:id', component: AuthorDetailsScreenComponent},

    {path:'user/login', component: UserLoginScreenComponent},
    {path:'user/register', component: UserRegisterScreenComponent},

    {path:'not-found', component: E404ScreenComponent},

    {path:'**', component: E404ScreenComponent},
]

export default appRoute;
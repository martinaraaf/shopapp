import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import{RegisterComponent} from './register/register.component'
import{LoginComponent} from './login/login.component'
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {
        path:"",
        component: ProductListComponent,
    },
    {
        path: "register",
        component: RegisterComponent,
    },
    {
        path: "login",
        component: LoginComponent,
    },
    {
        path: 'product-details/:id',
        component: ProductDetailsComponent
    },
    {
        path: "**",
        component: NotFoundComponent
    }
];

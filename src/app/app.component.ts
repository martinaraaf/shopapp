import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import{ProductCardComponent} from './product-card/product-card.component'
import{ProductListComponent} from './product-list/product-list.component'
import{ProductDetailsComponent} from './product-details/product-details.component'
import{ UsersComponent} from './users/users.component'
import { UserCardComponent } from './user-card/user-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,
           RouterOutlet,
           HeaderComponent,
           ProductListComponent,
           ProductDetailsComponent,
           ProductCardComponent,
           UsersComponent,
           UserCardComponent,
           FooterComponent
          ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'first-app';
}

import { Component ,Input } from '@angular/core';
import{ProductCardComponent} from '../product-card/product-card.component'
import productsData from '../../assets/products.json';
@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products: any[] = productsData;

  receiveFromChild(id : any){
    console.log("Recieved")
    this.products = this.products.filter(product => product.id !== id)
  }

}

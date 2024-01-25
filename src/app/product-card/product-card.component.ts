import { Component ,Input , Output, EventEmitter } from '@angular/core';
import { Router ,RouterLink} from '@angular/router';
import { DiscountPipe } from '../discount.pipe';
@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [RouterLink , DiscountPipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() productCard: any;
  @Output() selectedProduct = new EventEmitter<string>();
  deleteProduct(id:string){
    this.selectedProduct.emit(id)
  }
  constructor(private router: Router) {}

  // redirectToDetails(id: string) {
  //   this.router.navigate([`product-details/${id}`], {
  //     queryParams: {
  //       category: 'electronics',
  //     },
  //   });
  // }
}

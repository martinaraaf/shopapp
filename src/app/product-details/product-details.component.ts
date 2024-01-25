import { Component , Input} from '@angular/core';
import productsData from '../../assets/products.json';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  products: any[] = productsData;
  productItem: any;

  @Input() id?: string;
  constructor(private activatedRoute : ActivatedRoute){}

  ngOnInit(){
    const id = this.activatedRoute.snapshot.params['id']
    // console.log(this.activatedRoute.snapshot.params["id"])
    console.log(this.products.find((product : any) => product.id == id))
    this.productItem = this.products.find((product: any) => product.id == id)

  }
}

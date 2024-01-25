import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../app/interface/product.interface';

@Pipe({
  name: 'discount',
  standalone: true
})
export class DiscountPipe implements PipeTransform {

  // transform(value: number, ...args: unknown[]): unknown {
  //   return value < 5 ? 'Accepte Deal' : 'Good Deal';  }
  transform(product: Product): string {
    if (product.discountPercentage && product.discountPercentage > 0) {
      const discountAmount = (product.discountPercentage / 100) * product.price;
      const discountedPrice = product.price - discountAmount;
      return `Before Discount: $${product.price.toFixed(2)}
      After Discount: $${discountedPrice.toFixed(2)}`;
    } else {
      return `Price: $${product.price.toFixed(2)}`;
    }
  }
}

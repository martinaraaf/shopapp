// src/app/product.interface.ts

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  brand: string;
  category: string;
  createdAt: string;
  discountPercentage: number;
  images: object;
  rating: number;
  stock: number;
  thumbnail: string;
}

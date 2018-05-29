import { Injectable } from '@angular/core';

export interface IProduct{
  id:number,
  productName: string,
  productCode: string,
  releaseDate: Date;
  price:number,
  description: string,
  starRating: number,
  imageURL:string,
  emoji:string
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  
  constructor() { }

  
  
}

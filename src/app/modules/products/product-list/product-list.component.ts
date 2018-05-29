import { Component, OnInit } from '@angular/core';

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

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent  {
  public products: IProduct[] = [
      {
        id: 1,
        productName: 'Unicorn',
        productCode:'',
        price:2,
        description:'',
        starRating:2,
        imageURL:'https://media.giphy.com/media/IrQcyTog3X8VW/giphy.gif',
        emoji: '🦄',
        releaseDate : new Date()
      },
      {
        id: 2,
        productName: 'Boom',
        productCode:'',
        price:2,
        description:'',
        starRating:4,
        imageURL:'https://media.giphy.com/media/ue4rk7zGOW2Qg/giphy.gif',
        emoji: '💥',
        releaseDate : new Date()
      },
      {
        id: 3,
        productName: 'Rocket',
        productCode:'',
        price:2,
        description:'',
        starRating:4,
        imageURL:'https://media.giphy.com/media/13q7CYNKuDhliE/giphy.gif',
        emoji: '🚀',
        releaseDate : new Date()
      }
  ];

}

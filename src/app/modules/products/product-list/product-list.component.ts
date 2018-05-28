import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent  {
  public products: any[] = [
      {
        id: 1,
        name: 'Unicorn',
        emoji: '🦄',
        date : new Date()
      },
      {
        id: 2,
        name: 'Boom',
        emoji: '💥',
        date : new Date()
      },
      {
        id: 3,
        name: 'Rocket',
        emoji: '🚀',
        date : new Date()
      }
  ];

}

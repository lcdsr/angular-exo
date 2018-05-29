import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent  {

  static GIFS: string[] = [
    'https://media.giphy.com/media/IrQcyTog3X8VW/giphy.gif',
    'https://media.giphy.com/media/ue4rk7zGOW2Qg/giphy.gif',
    'https://media.giphy.com/media/13q7CYNKuDhliE/giphy.gif',
    'https://media.giphy.com/media/xTiTntH1cWq5gyBceQ/giphy.gif'
  ];

  public currentGif: string;

  constructor() {
    this.generateRandomGif();
  }

  private generateRandomGif(): void {
    const max = WelcomeComponent.GIFS.length;
    const gifIndex = Math.ceil(Math.random() * max - 1);
    this.currentGif = WelcomeComponent.GIFS[gifIndex];
  }

}

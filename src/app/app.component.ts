var Score = 0;

import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})


export class AppComponent  {
  leftNumber;
  rightNumber;
  score = '';

  constructor() {
    this.genNum();
  }

  genNum() {
    this.leftNumber = this.genRanNum();
    this.rightNumber = this.genRanNum();
  }

  genRanNum() {
    const maxNum = 99;
    const ranDec = Math.random() * maxNum;
    const ranNum = Math.round(ranDec);
    return ranNum;
  }

  isGreater(firstValue, secondValue) {
    if(firstValue > secondValue) {
      this.score = this.score + '😁';
    } else {
      Score = Score + '❌';
    }

    this.genNum();
  }
}

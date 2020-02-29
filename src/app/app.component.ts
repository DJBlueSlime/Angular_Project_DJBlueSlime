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

  genRanNum() {
    const maxNum = 10;
    const ranDec = Math.random() * maxNum;
    const ranNum = Math.round(randomDecimal);
    return ranNum;
  }
}

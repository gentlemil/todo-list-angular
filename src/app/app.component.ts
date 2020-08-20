import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'my daily todo list';

  config: {[key: string]: string | Date} = null;

  constructor() {
    setTimeout(() => {
      this.config = {
        title: 'my daily todo list',
        footer: ' © All Rights Reserved by Gentlemil. ',
        date: new Date(),
      };
    }, 500);
  };

  // getFooter() {
  //   // return ' © All Rights Reserved by Gentlemil. ';
  // }

  // getDate(): Date {
  //   return new Date();
  // }
}
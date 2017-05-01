import { Component } from '@angular/core';

import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService]
})
export class AppComponent {
  area: number = 0;

  constructor(private appService: AppService) { }

  calcCircleArea(radius: number): void {
    this.area = this.appService.calcCircleArea(radius);
  }
}

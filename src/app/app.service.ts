import { Injectable } from '@angular/core';

@Injectable()
export class AppService {
  calcCircleArea(radius: number) {
    return Math.round(radius * radius * Math.PI);
  }
}

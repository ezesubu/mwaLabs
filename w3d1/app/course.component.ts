import { Component, OnInit, Input } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-root',
  template: `
  <button type="button" (click)="decreaseValue()">
     -
  </button>
  <button type="button" (click)="increaseValue()">
    +
  </button>
  <input [value]="counterValue" (input)="counterValue=$event.target.value" >
  <p> Component Counter value = {{counterValue}}</p>
  `,
})
export class CourseComponent {
  public counterValue = 0;
  increaseValue(val) {
    this.counterValue++;
  }

  decreaseValue(val) {
    this.counterValue = this.counterValue - 1;
  }


}

import { Component, OnInit } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-root',
  template: `
  <button type="button" (click)="decreaseValue()">
     -
  </button>
  {{counterValue}}
  <button type="button" (click)="increaseValue()">
    +
  </button>`,
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  private counterValue;
  constructor() {
    this.counterValue = 0;
  }
  increaseValue(val) {
    this.counterValue++;
  }

  decreaseValue(val) {
    this.counterValue = this.counterValue - 1;
  }


  ngOnInit() {
  }

}

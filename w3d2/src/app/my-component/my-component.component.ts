import { Component, OnInit, Input, Output, ElementRef, Renderer2 } from '@angular/core';
console.log('really is a joke');
@Component({
  selector: 'app-my-component',
  template: `<ul>
  <li  [appMyvisibility] [appMyNewColor]='color'
  *ngFor="let item of beforeDied">{{item}}</li>
</ul>
`,
})
export class MyComponentComponent {
  @Input() ulVisibility;
  color = 'blue';
  public beforeDied = ['friends', 'answers', 'music', 'us'];
  varVisibility = true;
  constructor() { }
}

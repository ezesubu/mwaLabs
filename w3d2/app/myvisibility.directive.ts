import { Directive, HostListener, Input, ElementRef, Output, OnInit, HostBinding } from '@angular/core';

@Directive({
  selector: '[appMyvisibility]'
})
export class MyvisibilityDirective implements OnInit {
  @HostBinding('style.visibility') visibility;

  @Input() appMyvisibility;
  ngOnInit() {
    this.visibility = 'show';
  }

}

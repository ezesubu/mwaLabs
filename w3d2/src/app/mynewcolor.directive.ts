import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appMyNewColor]'
})
export class AppMyNewColorDirective {
 @HostBinding('style.color') color;
 @Input('appMyNewColor') newColor;

 @HostListener('click') onclick() {
   this.color = this.newColor;
 }
}

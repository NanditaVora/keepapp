import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appFontColor]'
})
export class FontColorDirective {

  @Input()
  appFontColor: string;

  constructor(private element: ElementRef) {
    
  }

  @HostListener('mouseover')
  onEnter(){
    this.element.nativeElement.style.color = this.appFontColor;
  }

  @HostListener('mouseout')
  onExit(){
    this.element.nativeElement.style.color = "black";
  }

}

import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appBackground]'
})
export class BackgroundDirective implements OnChanges {

  @Input()
  appBackground: string;

  constructor(private element: ElementRef) { 
    
  }

  ngOnChanges(){
    console.log(this.appBackground)
    this.element.nativeElement.style.backgroundColor=this.appBackground;
  }

}

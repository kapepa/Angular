import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appDirective]'
})
export class AppDirective {
  constructor(
    private el: ElementRef,
  ) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}

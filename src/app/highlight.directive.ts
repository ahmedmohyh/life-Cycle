import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from "@angular/core";

@Directive({
  selector:'[appHighlight]'
})
export class HighlightDirective{
  @Input('appHighlight') highlightcolor! : string
  @HostListener('mouseover') onMouseOver() {
    console.log('mouse over');
    this.highlight(this.highlightcolor || 'red');
    this.isHovering = true;
  }
  @HostBinding('class.active') isHovering!: boolean;

  constructor(private el:ElementRef, private rederer :Renderer2){
    //el.nativeElement.style.backgroundColor = 'green';
    //rederer.setStyle(el.nativeElement, 'backgroundColor','yellow');
  }
  highlight(color:string){
    this.rederer.setStyle(this.el.nativeElement, 'backgroundColor',color);
  }
}

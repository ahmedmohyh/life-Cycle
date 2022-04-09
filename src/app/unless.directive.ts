import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  public hasView: boolean = false;

  @Input() set appUnless(cond : string){

    if (cond.length ===0 &&!this.hasView ){
      this.hasView= true;
      this.viewContainer.createEmbeddedView(this.tempRef);
    }
     else if (cond &&this.hasView){
      this.viewContainer.clear();
      this.hasView = false;
    }
  }
  constructor(
    private tempRef:TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) { }

}

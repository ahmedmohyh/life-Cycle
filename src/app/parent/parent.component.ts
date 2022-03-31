import { ChildComponent } from './../child/child.component';
import { Component, DoCheck, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import {ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class ParentComponent implements OnChanges , OnInit, DoCheck {
  mytitle  = 'title1';
  @ViewChild(ChildComponent) mychild!: ChildComponent;
  constructor() {
   // console.log('the parent constructor has been called');

/*     setTimeout(() => {
      this.mytitle = '';
    }, 3000); */
    console.log('in constructor', this.mychild);

  }

  ngOnChanges(changes: SimpleChanges): void {
    //console.log('changes are ', changes);
    console.log('in ngOnChanges', changes,this.mychild);
  }
  ngOnInit(): void {
    //console.log('the child has been initilised');
    console.log('in ngOnInit', this.mychild);
  }
  ngDoCheck(): void {
    //console.log('changes detected');

    console.log('in ngDoCheck', this.mychild);

  }
  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
   // console.log('ng after content init.');
   console.log('in ngAfterContentInit', this.mychild);

  }
  ngAfterContentChecked(): void {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    //  console.log('ng after content checked');
    console.log('in ngAfterContentChecked', this.mychild);

  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    //console.log('ng after view init.');
    console.log('in ngAfterViewInit', this.mychild);

  }
  ngAfterViewChecked(): void {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    //console.log('ng after view checked');
    console.log('in ngAfterViewChecked', this.mychild);
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
   // console.log('component destroyed.');
   console.log('in ngOnDestroy', this.mychild);
  }

}

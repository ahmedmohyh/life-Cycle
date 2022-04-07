import { SubchildComponent } from './../subchild/subchild.component';
import { ChangeDetectionStrategy, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges, ViewChild, ViewChildren, QueryList, ElementRef, ContentChild, ChangeDetectorRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ChildComponent implements OnChanges , OnInit, DoCheck {
  @Input() names :BehaviorSubject<string[] | string| any> | undefined;
  list:string[] = [];
/*   nativeElement(arg0: string, nativeElement: any) {
    throw new Error('Method not implemented.');
  } */

//@Input() title: string = '';
/* @Input() set title(name:string){
  console.log(name);
this.childtitle = name;
} */

/* @ContentChild('refsub') subChild!: SubchildComponent;
 */
/* @ContentChildren('ref')subsChilds :QueryList<ElementRef> | undefined;

 */childtitle:string = '';

  constructor(private cdRef:ChangeDetectorRef) {
    //console.log('the child constructor has been called');
    //this.cdRef.detach();
   }
   refresh(){
     //this.cdRef.detectChanges();
   }

  ngOnChanges(changes: SimpleChanges): void {
    //console.log('changes are ', changes);
  }

  ngOnInit(): void {
    //console.log('the child has been initilised');
    this.names!.subscribe((name: string) => {
      this.list = [...this.list, ...name];
      //this.names = [...this.names ,...name];
      this.cdRef.markForCheck();

    })
  }

  ngDoCheck(): void {
    //console.log('changes detected');

  }

  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
   // console.log('ng after content init.');
   //console.log(this.subsChilds.length);


  }

  ngAfterContentChecked(): void {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    //  console.log('ng after content checked');

  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    //console.log('ng after view init.');
    //console.log(this.subChild);

  }

  ngAfterViewChecked(): void {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    //console.log('ng after view checked');
    //console.log(this.subChild);
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
   // console.log('component destroyed.');

  }

}

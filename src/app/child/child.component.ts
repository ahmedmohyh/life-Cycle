import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges , OnInit {
@Input() title: string = '';
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes is', changes);
  }
  ngOnInit(): void {
    console.log('the child has been initilised');

  }
}

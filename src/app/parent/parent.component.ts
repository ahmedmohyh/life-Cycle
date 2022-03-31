import { Component, OnInit } from '@angular/core';
import {ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class ParentComponent implements OnInit {
  mytitle  = 'title1';
  constructor() {
   // console.log('the parent constructor has been called');

/*     setTimeout(() => {
      this.mytitle = '';
    }, 3000); */
  }

  ngOnInit(): void {
  }

}

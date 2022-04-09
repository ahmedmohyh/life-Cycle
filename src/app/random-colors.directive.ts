import { HostListener } from '@angular/core';
import { Directive, Host, HostBinding } from '@angular/core';

@Directive({
  selector: '[appRandomColors]'
})
export class RandomColorsDirective {
  public possibleColors: string[]= ["red", "green","blue","yellow","brown","pink","orange","black"];

  @HostBinding('style.color') color!: string;
  @HostBinding('style.border-color') borderColor!: string;

  @HostListener('keydown') setColor(){
    const colorindex = Math.floor(Math.random() * this.possibleColors.length)
    this.color =this.borderColor =this.possibleColors[colorindex];
  }
  constructor() { }

}

import { Directive,ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCharacterOnly]'
})
export class CharacterOnlyDirective {

  constructor(private el:ElementRef) { }

  @HostListener('input',['$event']) onInputChange(event:any){
    let initialValue=this.el.nativeElement.value;
    this.el.nativeElement.value=initialValue.replace(/[^a-zA-Z]*/g, '')
    // this.el.nativeElement.value=initialValue.replace(/^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/g,'')
    // this.el.nativeElement.value=initialValue.replace(/[^0-2]+/g,'')
    // this.el.nativeElement.value=initialValue.replace(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/g,'')

  }

}

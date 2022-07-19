import { Directive ,ElementRef,HostListener,Input} from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})
export class HighLightDirective {

  constructor(private Ele :ElementRef ) { }
  @Input() appHighLight='';

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appHighLight || 'yellow');
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }
  
  private highlight(color: string) {
    this.Ele.nativeElement.style.backgroundColor = color;
  }
}

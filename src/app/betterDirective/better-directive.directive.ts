import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterDirective]'
})
export class BetterDirectiveDirective implements OnInit {
   
  @Input() highlightColor:string='blue'
  @Input('appBetterDirective') defaultColor:string='transparent'
  @HostBinding('style.backgroundColor')
  backgroundcolor!: string; 
  
  constructor(private elref:ElementRef,private render:Renderer2) { }
  ngOnInit(): void {
    // this.render.setStyle(this.elref.nativeElement,'background-color','lightgreen')
    this.backgroundcolor=this.defaultColor
  }

  @HostListener('mouseenter') mouseenter(eventData:Event){
      
    // this.render.setStyle(this.elref.nativeElement,'background-color','lightgreen')
    //////////using hostbinding////////
    // this.backgroundcolor='lightgreen'
    //////////////////////////////
    this.backgroundcolor=this.highlightColor

  }
  @HostListener('mouseleave') mouseleave(eventData:Event){
   
    // this.render.setStyle(this.elref.nativeElement,'background-color','transparent')
    ///////using hostbinding//////////////
    // this.backgroundcolor='transparent'
    /////////////////////////////////
    this.backgroundcolor=this.defaultColor


  }


}

import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component,
   ContentChild,
   DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, 
   ViewChild, 
   ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation:ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit,OnChanges, DoCheck,AfterContentInit,
AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy {
  // @Input() element :{type:string,name:string,content:string}
  //////// binding through alias   ///////////////
  @Input('srvElement') element :{type:string,name:string,content:string}
  @Input() name:string
  @ViewChild('header') header:ElementRef
  @ContentChild('paragraph') paragraph:ElementRef
  constructor() {
    console.log('constructor called')
   }

  ngOnInit(): void {
    console.log('ngoninit called')
  }
  ngOnChanges(changes : SimpleChanges){
    console.log('ngon changes called')
    console.log(changes)
  }
  ngDoCheck(){
    console.log('ng do check called')
  }
  ngAfterContentInit(){
    console.log('ngAfterContentInit')
    console.log('paraserver:'+this.paragraph.nativeElement.textContent)
  }
 
  ngAfterContentChecked(){
      console.log('ngAfterContentChecked')
  }
  ngAfterViewInit(){
    console.log('ngAfterviewInit');
    console.log('header:'+ this.header.nativeElement.textContent)

  }
 
  ngAfterViewChecked(){
      console.log('ngAfterviewChecked')
  }
  ngOnDestroy() {
    console.log('on destroy called')
  }

}

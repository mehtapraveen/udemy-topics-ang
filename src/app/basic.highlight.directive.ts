import { Directive, ElementRef, OnInit } from "@angular/core";


@Directive({
    selector:'[appBasichighlight]'
})
export class BasicHighlightDirective implements OnInit{

    constructor(private elementref:ElementRef){}
ngOnInit(): void {
    this.elementref.nativeElement.style.backgroundColor='pink'
}
}
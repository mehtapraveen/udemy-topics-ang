import { Component, OnInit, Output,EventEmitter, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

 @Output() serverCreated = new EventEmitter<{serverName:string,serverContent:string}>();
 @Output() bluerintCreated = new EventEmitter<{serverName:string,serverContent:string}>();
//  newServerName ='';
//  newServerContent='';
@ViewChild('serverInputContent',{static:true}) serverInputContent:ElementRef

  constructor() { }

  ngOnInit(): void {
  }
  onAddServer(serverInputData:HTMLInputElement){
    // console.log(serverInputData)
   this.serverCreated.emit({
    serverName:serverInputData.value,
    serverContent:this.serverInputContent.nativeElement.value})
  // console.log(this.serverInputContent)
  }
  onAddBlueprint(serverInputData:HTMLInputElement) {
    // this.serverElements.push({
    //   type: 'server',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // })
    this.bluerintCreated.emit({
      serverName:serverInputData.value,
      serverContent:this.serverInputContent.nativeElement.value})

  }

 

}

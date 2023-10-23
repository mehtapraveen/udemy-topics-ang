import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'udemy';
  ServerElements = [{ type: 'server', name: 'testserver', content: 'just a test' }]
  @ViewChild('paragraph') paragraph: ElementRef
  oddnumbers: number[] = []
  evennumbers: number[] = []
  constructor() { }

  ngOnInit(): void {
  }

  // ngAfterViewInit(){
  //   console.log('para:' +this.paragraph.nativeElement.textContent)

  // }
  onServerAdded(server: { serverName: string, serverContent: string }) {
    // this.serverElements.push({
    //   type: 'server',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // })
    this.ServerElements.push({
      type: 'server',
      name: server.serverName,
      content: server.serverContent
    })
  }
  onBlueprintAdded(bluePrint: { serverName: string, serverContent: string }) {
    // this.serverElements.push({
    //   type: 'server',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // })
    this.ServerElements.push({
      type: 'blueprint',
      name: bluePrint.serverName,
      content: bluePrint.serverContent
    })
  }
  onchangeFirst() {
    this.ServerElements[0].name = "changed!"
  }
  ondestroy() {
    this.ServerElements.splice(0, 1)
  }

  onintervalFired(interval: number) {
    console.log(interval)
    if (interval % 2 === 0) {
      this.evennumbers.push(interval)
    }
    else {
      this.oddnumbers.push(interval)
    }
  }
}

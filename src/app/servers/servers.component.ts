import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowToAddServer = false;
  serverCreation= "server is not created"
  serverName: any;
  serverNameOne='testserver'
  serverAdd = false
  servers =['testserver1', 'testserver2']
  constructor() {
    setTimeout(()=>{
      this.allowToAddServer = true
    },2000)
   }

  ngOnInit(): void {
  }
            
  serverstatus(){
    this.serverAdd = true
    this.servers.push(this.serverNameOne)
    this.serverCreation="server is created !! " + this.serverNameOne
  }
  onUpdateServerName(event:any){
    this.serverAdd = true
      this.serverName = (<HTMLInputElement>event.target).value
  }
}

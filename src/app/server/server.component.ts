import { Component } from "@angular/core";


@Component({
    selector:'app-server',
    templateUrl:'./server.component.html',
    styles:[`
      .online{
        color: white;
      }`]
})
export class serverComponent{

    /*string interpolation  */
    serverId  = 10;
    serverStatus ="online"
    constructor(){
        this.serverStatus = Math.random()>0.5 ? 'online' : 'offline'
    }
    getServerData(){
        return this.serverStatus
        
    }
    getcolor(){
       return this.serverStatus === 'online' ? 'green':'red' 
    }
    
}
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {
  test= ''
  showToggle =false;
  log=[];
  servers=[];
  constructor() { }

  ngOnInit(): void {
  }
  showdetails(){
    this.showToggle =!this.showToggle
    // this.log.push(this.log.length +1)
    this.log.push(new Date())
  }
  onAddserver(){
    this.servers.push('new server was created')
  }
  removeserver(i:number){
    const position = i+1;
    this.servers.splice(position,1)
  }

}

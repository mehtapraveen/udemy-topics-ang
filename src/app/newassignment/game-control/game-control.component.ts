import { Component, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
   @Output() intervalFired = new EventEmitter<number>()
  intervals;
  increment =  0
  constructor() { }

  ngOnInit(): void {
  }
  startGame(){
   this.intervals = setInterval(()=>{
    this.intervalFired.emit ( this.increment + 1)
    this.increment ++
   },1000)
  }
  stopGame(){
    clearInterval(this.intervals)
  }

}

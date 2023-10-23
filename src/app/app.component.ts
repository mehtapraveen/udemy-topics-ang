import { Component, OnInit } from '@angular/core';
import { TestService } from './test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'udemy-observables';
  show = false

  constructor(private serv: TestService) { }
  ngOnInit(): void {
    this.serv.buttonClicked.subscribe(data => {
      this.show = data
    })
  }

}

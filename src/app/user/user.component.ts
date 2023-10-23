import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TestService } from '../test.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  id: number

  actionbtn = "click the button"
  constructor(private acroute: ActivatedRoute, private serv: TestService) { }

  ngOnInit(): void {
    this.acroute.params.subscribe((params: Params) => {
      this.id = +params['id']
    })
  }
  onClick() {

    this.actionbtn = "thatsIt"
    this.serv.buttonClicked.next(true)
  }
}

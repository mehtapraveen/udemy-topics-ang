import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: { id: number, name: string };
  constructor(private acroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.user = {
      id: this.acroute.snapshot.params['id'],
      name: this.acroute.snapshot.params['name']
    }
    this.acroute.params.subscribe((params: Params) => {
      this.user.id = params['id']
      this.user.name = params['name']
    })
  }

}

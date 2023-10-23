import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { UserService } from 'src/app/user.service';


@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  users!: string[]
  constructor(private userser: UserService) { }

  ngOnInit(): void {
    this.users = this.userser.activeUsers
  }
  onSetToInActive(id: number) {
    this.userser.onSetToInactive(id)
  }

}


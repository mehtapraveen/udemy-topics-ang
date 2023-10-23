import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  users!: string[]
  constructor(private userser: UserService) { }

  ngOnInit(): void {
    this.users = this.userser.inactiveUsers
  }
  onSetToActive(id: number) {
    this.userser.onSetToactive(id)
  }

}

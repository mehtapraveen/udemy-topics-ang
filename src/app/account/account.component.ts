import { Component, Input, OnInit, } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountServices } from '../accounts.service';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent implements OnInit {
  @Input()
  account!: { name: string; status: string; };
  @Input()
  id!: number;
  constructor(private logservice: LoggingService, private accservice: AccountServices) { }

  ngOnInit(): void {
  }
  onSetTo(status: string) {
    this.accservice.updateStatus(this.id, status)
    this.accservice.statusUpdated.emit(status)
    // console.log("A server status changed, new status:" +status)

    // creating manual instance of services
    // const service = new LoggingService()
    // service.logStatusChange(status)

    ///now angular will create the instance we dont need to create it manually
    // this.logservice.logStatusChange(status)

  }

}

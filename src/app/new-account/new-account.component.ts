import { Component, OnInit, } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountServices } from '../accounts.service';
@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
})
export class NewAccountComponent implements OnInit {


  constructor(private logservice: LoggingService, private accservice: AccountServices) { }

  ngOnInit(): void {
  }
  onCreateAccount(accountName: string, accountStatus: string) {
    this.accservice.AddAccount(accountName, accountStatus)
    this.accservice.statusUpdated.subscribe((status: string) => alert('newstatus:' + status))

    // console.log('A server status changed, new status:' +accountStatus)

    //manually creating instance
    // const service = new LoggingService()
    // service.logStatusChange(accountStatus)

    ///now angular will create instances
    // this.logservice.logStatusChange(accountStatus)
  }

}

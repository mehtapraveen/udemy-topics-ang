import { Component, OnInit } from '@angular/core';
import { AccountServices } from './accounts.service';
import { UserService } from './user.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [UserService]
})
export class AppComponent implements OnInit {
    title = 'udemy-services';


    accounts: { name: string, status: string }[] = []
    constructor(private accservice: AccountServices) { }

    ngOnInit() {
        this.accounts = this.accservice.accounts
    }



}

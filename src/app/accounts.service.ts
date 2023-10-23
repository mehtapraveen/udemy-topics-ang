import { EventEmitter, Injectable } from "@angular/core"
import { LoggingService } from "./logging.service"

@Injectable()
export class AccountServices {

    accounts = [
        {
            name: "Master Account",
            status: "active"
        },
        {
            name: "Test Account",
            status: "inactive"
        },
        {
            name: "Hidden Account",
            status: "unknown"
        },

    ]
    statusUpdated = new EventEmitter<string>()
    constructor(private logser: LoggingService) { }

    AddAccount(name: string, status: string) {
        this.accounts.push({ name: name, status: status })
        this.logser.logStatusChange(status)
    }

    updateStatus(id: number, status: string) {
        this.accounts[id].status = status

    }

}
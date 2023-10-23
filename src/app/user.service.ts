import { Injectable } from "@angular/core"
import { CounterService } from "./counter.service"

@Injectable()
export class UserService {
    activeUsers = ['praveen', 'mehta']
    inactiveUsers = ['josna', 'kola']
    constructor(private countser: CounterService) { }
    onSetToInactive(id: number) {
        this.inactiveUsers.push(this.activeUsers[id])
        this.activeUsers.splice(id, 1)
        this.countser.incrementsetToInActive()

    }
    onSetToactive(id: number) {
        this.activeUsers.push(this.inactiveUsers[id])
        this.activeUsers.splice(id, 1);
        this.countser.incrementsetToActive()

    }

}
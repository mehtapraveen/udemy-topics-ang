import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";

export class customValidators {

    static invalidProjectName(control: FormControl): { [j: string]: boolean } {
        if (control.value === 'Test') {
            return { 'forbiddenName': true }
        }
        return null
    }

    static asyncProjectName(control: FormControl): Promise<any> | Observable<any> {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value === 'TestProject') {
                    resolve({ 'asyncForbidden': true })
                }
                else {
                    resolve(null)
                }
            }, 1000)
        })
        return promise
    }
}
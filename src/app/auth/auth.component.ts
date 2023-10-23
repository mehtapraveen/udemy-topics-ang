import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "./auth-service";

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html'
})
export class AuthComponent {
    isLoginMode = true;
    isloading = false
    error: string = null
    constructor(private authservice: AuthService) { }

    switchmode() {
        this.isLoginMode = !this.isLoginMode
    }

    onsubmit(postdata: NgForm) {
        if (!postdata.valid) {
            return
        }
        const email = postdata.value.email
        const password = postdata.value.password
        this.isloading = true
        if (this.isLoginMode) { }
        else {
            setTimeout(() => {
                this.authservice.sendpost(email, password).subscribe(res => {
                    console.log(res)
                    this.isloading = false
                }, errorMessage => {
                    console.log(errorMessage)
                    this.error = errorMessage

                    this.isloading = false

                })
            }, 5000)
        }

    }

}


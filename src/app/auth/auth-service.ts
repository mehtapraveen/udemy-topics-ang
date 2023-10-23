import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { throwError } from "rxjs";
import { catchError } from "rxjs/operators";


interface authInterface {
    idToken: string,
    email: string,
    refreshToken: string,
    expiresIn: string,
    localId: string
}
@Injectable({ providedIn: 'root' })
export class AuthService {

    constructor(private http: HttpClient) { }

    sendpost(email: string, password: string) {
        return this.http.post<authInterface>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAZ8s44WSft0JDg-q-_hiIOIcejzt6ZzOE', {
            email: email,
            password: password,
            returnSecureToken: true
        })
            .pipe(catchError(errorRes => {
                let errorMessage = "acha unknown Error Occured"

                if (!errorRes.error || !errorRes.error.error) {
                    return throwError(errorMessage)
                }
                switch (errorRes.error.error.message) {
                    case 'EMAIL_EXISTS':
                        errorMessage = "Email already existed"
                }
                return throwError(errorMessage)

            }))


    }

} 
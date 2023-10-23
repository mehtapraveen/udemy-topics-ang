import { HttpEvent, HttpEventType, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { tap } from "rxjs/operators";


export class LoginInterfaceService implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler) {

        // if (req.method === 'POST') {
        //     return next.handle(req)
        // }
        console.log("outgoingRequest...")
        console.log(req.url)
        console.log(req.headers)

        return next.handle(req).pipe(tap(events => {

            if (events.type === HttpEventType.Response) {
                console.log('Incoming response')
                console.log(events.body)
            }
        }))

    }
}
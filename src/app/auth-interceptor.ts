import { HttpEvent, HttpEventType, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { tap } from "rxjs/operators";


export class AuthInterfaceService implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler) {

        // if (req.method === 'POST') {
        //     return next.handle(req)
        // }
        console.log("request on the way....")
        console.log(req.url)
        const modified = req.clone({ headers: req.headers.append('auth', 'xyz') })
        return next.handle(modified).pipe(tap(events => {
            console.log(events)
            if (events.type === HttpEventType.Response) {
                console.log('response arrived')
                console.log(events.body)
            }
        }))

    }
}
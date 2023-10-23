import { Injectable } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { ServerService } from "src/app/server.service";
interface server {
    id: number,
    name: string,
    status: string
}
@Injectable()
export class ServerResolver implements Resolve<server>{
    constructor(private service: ServerService) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<server> | Promise<server> | server {
        return this.service.getServer(+route.params['id'])
    }
}
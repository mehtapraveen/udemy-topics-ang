import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs/';
import { ServerService } from 'src/app/server.service';
import { canComponentDeactivate } from './can-deactive-gaurd.service';


@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, canComponentDeactivate {
  server: { id: number, name: string, status: string, }
  serverName = '';
  serverStatus = '';
  allowEdit = false;
  changesSaved = false;
  constructor(private service: ServerService, private acroute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    console.log(this.acroute.snapshot.queryParams)
    console.log(this.acroute.snapshot.fragment)
    this.acroute.queryParams.subscribe((queryParams: Params) => {
      this.allowEdit = queryParams['allowEdit'] === '1' ? true : false
      console.log(this.allowEdit)
    })
    const id = +this.acroute.snapshot.params['id']

    this.server = this.service.getServer(id);

    this.serverName = this.server.name
    this.serverStatus = this.server.status;


  }
  onUpdateServer() {
    this.service.updateServer(this.server.id, { name: this.serverName, status: this.serverStatus });
    this.changesSaved = true
    this.router.navigate(['../'], { relativeTo: this.acroute })
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.allowEdit) {
      return true;
    }
    if ((this.serverName !== this.server.name || this.serverStatus !== this.server.status) && !this.changesSaved) {
      return confirm('Do you want to discard the changes?');
    } else {
      return true;
    }
  }
}




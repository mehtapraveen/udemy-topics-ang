import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  public servers: { id: number, name: string, status: string }[] = [];

  constructor(private service: ServerService, private router: Router, private acroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.servers = this.service.getServers();


  }
  onreload() {
    this.router.navigate(['servers'])
  }

}

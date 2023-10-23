import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';
import { ServerService } from 'src/app/server.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: { id: number; name: string; status: string; }
  constructor(private service: ServerService, private acroute: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.acroute.data.subscribe((data: Data) => {
      this.server = data['server']
    })
    // const id = +this.acroute.snapshot.params['id']
    // this.server = this.service.getServer(id);
    // this.acroute.params.subscribe((params: Params) => {
    //   this.server = this.service.getServer(+params['id']);

    // })


  }
  onedit() {
    this.router.navigate(['edit'], { relativeTo: this.acroute, queryParamsHandling: 'preserve' })
  }



}

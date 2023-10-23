import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pi-comp',
  templateUrl: './pi-comp.component.html',
  styleUrls: ['./pi-comp.component.css']
})
export class PiCompComponent implements OnInit {
  test = ''
  new: any

  asyncdata = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('fuck')
    }, 2000)
  })
  servers = [
    {
      instanceType: 'medium',
      name: 'Production Server',
      status: 'stable',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'large',
      name: 'User Database',
      status: 'critical',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'small',
      name: 'Development Server',
      status: 'offline',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'small',
      name: 'Testing Environment Server',
      status: 'stable',
      started: new Date(15, 1, 2017)
    }
  ];
  constructor() { }

  ngOnInit(): void {
    let time = new Observable(observer => {
      setTimeout(() => observer.next(new Date().toString()), 2000)
    })
    time.subscribe((data) => {
      this.new = data
    })
  }
  getStatusClasses(server: { instanceType: string, name: string, status: string, started: Date }) {
    return {
      'list-group-item-success': server.status === 'stable',
      'list-group-item-warning': server.status === 'offline',
      'list-group-item-danger': server.status === 'critical',
    }
  }
  addserver() {
    this.servers.push({
      instanceType: 'extra large',
      name: 'DeploymentServer',
      status: 'critical',
      started: new Date(15, 1, 2017)
    })
  };


}




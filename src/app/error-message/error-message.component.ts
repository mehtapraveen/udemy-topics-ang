import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.css']
})
export class ErrorMessageComponent implements OnInit {

  errorMessage: string

  constructor(private acroute: ActivatedRoute) { }

  ngOnInit(): void {
    // this.errorMessage = this.acroute.snapshot.params['message']
    this.acroute.data.subscribe((data: Data) => {
      this.errorMessage = data['message']
    })

  }

}

import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-rxjs-concepts',
  templateUrl: './rxjs-concepts.component.html',
  styleUrls: ['./rxjs-concepts.component.css']
})
export class RxjsConceptsComponent implements OnInit, OnDestroy {
  @ViewChild('btnref', { static: false }) button: ElementRef
  Data = []
  subject = new BehaviorSubject(111)
  subscribe: Subscription
  constructor() { }

  ngOnInit(): void {
  }
  emitdata() {
    this.subject.next(1)
    console.log(1)
    setTimeout(() => {
      this.subject.next(2)
      console.log(2)
    }, 2000)
    setTimeout(() => {
      this.subject.next(3)
      console.log(3)
    }, 3000)
    setTimeout(() => {
      this.subject.next(4)
      console.log(4)
    }, 4000)
    setTimeout(() => {
      this.subject.next(5)
      console.log(5)
    }, 5000)
  }

  getdata() {
    console.log("subscribed")
    this.subscribe = this.subject.subscribe(res => {
      this.Data.push(res)
      console.log(this.button)
      this.button.nativeElement.disabled
      this.Data = []
      setTimeout(() => {
        !this.button.nativeElement.disabled

      }, 5000)


    })
  }

  ngOnDestroy(): void {
    this.subscribe.unsubscribe()
  }

}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, interval, } from 'rxjs';
import { map, filter } from 'rxjs/operators'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  private stopNumbers: Subscription
  constructor() { }



  ngOnInit(): void {
    // this.stopNumbers = interval(1000).subscribe(data => {
    //   console.log(data)
    // })
    const customObs = Observable.create(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count === 3) {
          observer.complete()
        }
        if (count > 3) {
          observer.error(new Error('error is occured'))
        }
        count++

      }, 1000)
    })


    this.stopNumbers = customObs.pipe(filter((data: number) => {
      return data > 0
    }), map((data: number) => {
      return 'Round:' + (data + 1)
    })).subscribe(data => {
      console.log(data)
    }, error => {
      alert(error)
    }, () => {
      console.log('completed')
    });
  }


  ngOnDestroy(): void {
    this.stopNumbers.unsubscribe()
  }


}

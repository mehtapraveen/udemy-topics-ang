import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { map } from 'rxjs/operators';
import { post } from '../form.model';
import { ApiService } from '../api.service';
import { Observable, Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';
import { error } from 'console';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit, OnDestroy {
  loadedPosts: post[] = []
  isfetching = false
  @ViewChild('postForm', { static: false }) postform: NgForm
  error: null;
  errorsub: Subscription
  // error: any;

  constructor(private http: HttpClient, private api: ApiService) { }

  ngOnInit(): void {
    this.errorsub = this.api.error.subscribe(error => {
      this.error = error
      console.log(error)
    })

    this.isfetching = true
    this.api.getdata().subscribe(response => {
      this.loadedPosts = response;
      this.isfetching = false
    }, error => {
      this.isfetching = false
      for (let key in error) {
        this.error = error.error[key]
      }
      // this.error = error.message
    })

  }


  onsubmit(postData: post) {

    this.api.postdata(postData.title, postData.content)
    this.postform.reset()

  }
  fetchPosts() {
    this.isfetching = true
    this.api.getdata()
      .subscribe(response => {
        this.loadedPosts = response;
        this.isfetching = false
      }, error => {
        this.isfetching = false
        console.log(error)
        // for (let key in error) {
        //   this.error = error.error[key]
        // }
        this.error = error.statusText
      })


  }

  clearposts() {
    this.api.deletedata().subscribe(() => {
      this.loadedPosts = []

    })
  }
  onhandleError() {
    this.error = null
  }
  ngOnDestroy(): void {
    this.errorsub.unsubscribe()
  }

}




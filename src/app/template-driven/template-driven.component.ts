import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {

  @ViewChild('myform') singupform: NgForm


  questions = [
    'what is your favourite food',
    'what is your favourite place',
    'fav movie'
  ]
  defaultQuestion = 'fav movie';
  answer = ''
  genders = ['male', 'female'];
  submitted = false
  constructor() { }

  userdetails = {
    username: '',
    email: '',
    select: '',
    questionAnswer: '',
    gender: ''
  }
  ngOnInit(): void {

  }
  suggestusername() {
    this.singupform.form.patchValue({
      userdata: {
        username: 'praveen'
      }
    })
  }


  // onsubmit(form: NgForm) {
  //   console.log(form)
  // }
  onsubmit() {
    this.submitted = true;
    this.userdetails.username = this.singupform.value.userdata.username
    this.userdetails.email = this.singupform.value.userdata.email
    this.userdetails.select = this.singupform.value.select
    this.userdetails.questionAnswer = this.singupform.value.questionAnswer
    this.userdetails.gender = this.singupform.value.gender
    this.singupform.reset()

  }

}

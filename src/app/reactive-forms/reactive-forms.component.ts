import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { group } from 'console';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
  Genders = ['Male', 'Female']
  signupForm: FormGroup;
  forbiddenUserNames = ['test', 'Admin', 'itsme']
  forbiddenEmails = ['test@gmail.com', 'josna@ilove.com', 'praveen123@gmail.com']
  get hobbyControls() {
    return (this.signupForm.get('hobbies') as FormArray).controls;
  }
  constructor() { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      userdata: new FormGroup({
        username: new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        email: new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmail.bind(this)),
      }),
      gender: new FormControl('Male'),
      hobbies: new FormArray([])
    })
    this.signupForm.statusChanges.subscribe((value) => {
      console.log(value)
    })
  }
  onsubmit() {
    console.log(this.signupForm)
  }


  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  forbiddenNames(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenUserNames.indexOf(control.value) !== -1) {
      return { 'nameisForbidden': true }
    }
    return null
  }
  forbiddenEmail(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        // if (this.forbiddenEmails.indexOf(control.value) !== -1) {
        if (control.value === 'test@gmail.com') {
          resolve({ 'forbiddenEmail': true })
        }
        else {
          resolve(null)
        }
      }, 1000)
    })
    return promise
  }


}

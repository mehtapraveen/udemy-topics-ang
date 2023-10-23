import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { customValidators } from './custom-validators';

@Component({
  selector: 'app-rfs-assignment',
  templateUrl: './rfs-assignment.component.html',
  styleUrls: ['./rfs-assignment.component.css']
})
export class RfsAssignmentComponent implements OnInit {
  projectStatus = ['Stable', 'critical', 'Finished']
  projectForm: FormGroup
  projectName = ['Test']
  constructor() { }



  ngOnInit(): void {
    this.projectForm = new FormGroup({
      name: new FormControl(null, [Validators.required, customValidators.invalidProjectName], customValidators.asyncProjectName),
      email: new FormControl(null, [Validators.required, Validators.email]),
      status: new FormControl('critical')
    })
  }


  onSubmit() {
    console.log(this.projectForm.value)
  }


}

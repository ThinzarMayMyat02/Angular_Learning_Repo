import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Student } from '../reactive-form-array/reactive-form-array.component';

@Component({
  selector: 'app-template-driven1',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './template-driven1.component.html',
  styleUrl: './template-driven1.component.scss'
})
export class TemplateDriven1Component {

 // @ViewChild('studentForm') studentForm: NgForm;
  @ViewChild('studentForm') studentForm!: NgForm;

  constructor() { }

  students : Student[] = [{
    name: 'mmtz',
    age: 20,
    email: 'mmtz@gmail.com',
    isStudent: true,
    studentId: '1234567890'
  },{
    name: 'tester',
    age: 21,
    email: 'tester@gmail.com',
    isStudent: false,
    studentId: null
  }
];

handleIsStudentChange(student: Student){
  student.studentId = null;
}

onSubmit(){
    console.log('Form Data: ',this.students);
    console.log(this.studentForm.valid);
  }
}

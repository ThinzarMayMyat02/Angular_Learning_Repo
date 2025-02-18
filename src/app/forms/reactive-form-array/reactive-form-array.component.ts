import { Component, inject, OnInit } from '@angular/core';
import { ReactiveForm1Component } from '../reactive-form1/reactive-form1.component';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-array',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form-array.component.html',
  styleUrl: './reactive-form-array.component.scss'
})
export class ReactiveFormArrayComponent implements OnInit {

  form!:FormGroup;

  private _formBuilder = inject(FormBuilder);

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      students : this._formBuilder.array(students.map(student => this.createStudentForm(student)))
     })
     console.log("form : ", this.form);
  }

  get studentFromArray():FormArray{
    return this.form.get('students') as FormArray;
  }
  createStudentForm(student: Student): any {
    const toReturn = this._formBuilder.group({
      name: [student.name, [Validators.required]],
      age: [student.age,  [Validators.required, Validators.min(18)]],
      email: [student.email, [Validators.required]],
      isStudent: [student.isStudent]
    })as FormGroup;
    this.checkIsStudent(toReturn, student.isStudent, student.studentId);
    toReturn.get('isStudent')?.valueChanges.subscribe(value => {
      this.checkIsStudent(toReturn, value);
    })

    return toReturn;
  }
  checkIsStudent(formGroup: FormGroup<any>, isStudent: boolean | null, studentId: string | null = '') {
    if(isStudent){
      formGroup.addControl('studentId', this._formBuilder.control(studentId,[Validators.required]));
    }else{
      formGroup.removeControl('studentId');
    }
  }

  checkControlContains(formGroup: any, controlName: string) {
    return formGroup.contains(controlName);
  }

  touchForm(formGroup: FormGroup | FormArray = this.form) {
    Object.keys(formGroup.controls).forEach(key => {
      const control = formGroup.get(key);

      if(control?.invalid){
        if((control instanceof FormGroup || control instanceof FormArray) && control.invalid){
          const hasInvalidChild = Object.values(control.controls).some(control => control.invalid);
          if(hasInvalidChild){
            this.touchForm(control);
          }
        }else{
          control?.markAsTouched();
          control?.updateValueAndValidity();
        }
      }
    })
  }

  onSubmit() {
    if (this.form.valid) {
      console.log("form value : ", (this.form.value) as Student[]);
      console.log("form valid : ", this.form.valid);
    } else {
      console.log("form is invalid ");

      this.touchForm();
    }
  }

  studentFactoryService():Student{
    return {
      name: null,
      age: null,
      email: null,
      isStudent: null,
      studentId: null
    }
  }

  addStudent(){
    this.studentFromArray.push(this.createStudentForm(this.studentFactoryService()));
  }

  removeStudent(index: number){
    this.studentFromArray.removeAt(index);
  }
}

export const students: Student[] = [
  {
    name: 'mmtz',
    age: 18,
    email: 'mmtz@gmail.com',
    isStudent: true,
    studentId: "123456789"
  }
 ];

export interface Student {
  name: string | null;
  age: number | null;
  email:string  | null;
  isStudent:boolean | null;
  studentId:string  | null;
}

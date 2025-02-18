import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form1',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form1.component.html',
  styleUrl: './reactive-form1.component.scss'
})
export class ReactiveForm1Component implements OnInit{

  form!:FormGroup;

  private _formBuilder = inject(FormBuilder);

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      name: ['mmtz',[Validators.required]],
      age:['18',[Validators.required,Validators.min(18)]],
      email:['mmtz@gmail.com',[Validators.required]],
      isStudent:[null],
    });

    this.checkIsStudent();
  }

  checkIsStudent() {
    this.form.get('isStudent')?.valueChanges.subscribe((value:boolean) =>{
      if(value){
        this.form.addControl('studentId',this._formBuilder.control(null,[Validators.required]));
      }else{
        this.form.removeControl('studentId');
      }
    });
  }

  checkControlContains(controlName : string) {
    return this.form.contains(controlName);
  }

  // get isStudentValue(): boolean{
  //   return this.form.get('isStudent')?.value;
  // }

  touchForm(){
    Object.keys(this.form.controls).forEach(k => {
      const control = this.form.get(k);
      control?.markAsTouched();
      control?.updateValueAndValidity();
    });
  }

  submit(): void{

    if(this.form.valid){
      console.log('form value: ',this.form.value);
      console.log('form control value: ',this.form.get('name'));
      console.log("getting required error : ", this.form.get('name')?.errors?.['required']);
    }else{
      console.log('form is invalid');
      console.log('form value: ',this.form);
      this.touchForm();
    }
  }
}


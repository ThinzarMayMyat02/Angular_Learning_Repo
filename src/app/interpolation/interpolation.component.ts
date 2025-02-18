import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  standalone: true,
  imports: [],
  templateUrl: './interpolation.component.html',
  styleUrl: './interpolation.component.scss'
})
export class InterpolationComponent {

  title!:string;
  color:string = 'red';

  constructor(){
    this.title = 'Welcome from Angular Binding.';
  }

  clickMe() {
    alert('Hello World');
  }

  changeColor(c : string){
    this.color = c;
  }
}

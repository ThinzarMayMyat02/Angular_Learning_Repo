import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.scss'
})
export class Child1Component {
  @Input()
  str!:string;

  pname:string = '';

  @Output()
  changeStr = new EventEmitter();

  changeName(s:string){
    this.pname = s;
    console.log("in child1: ",this.pname);
    this.changeStr.emit(this.pname);
  }


}

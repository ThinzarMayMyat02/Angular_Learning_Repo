import { Component, EventEmitter, Input, input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {


  index : number = 0;

  @Input()
  name!:string;

  @Output()
  changeIndex = new EventEmitter<number>();

  reduce(){
    this.index--;
    this.changeIndex.emit(this.index);
  }

  increase(){
    this.index++;
    this.changeIndex.emit(this.index);
  }

}

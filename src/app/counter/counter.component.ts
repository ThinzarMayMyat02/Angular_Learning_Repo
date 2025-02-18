import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {

  @Input()
  count!:number;

  @Output()
  countChange = new EventEmitter<number>();

  reduce(){
    this.count --;
    this.countChange.emit(this.count);
  }

  increase(){
    this.count ++;
    this.countChange.emit(this.count);
    console.log('increase: '+this.count);
  }
}

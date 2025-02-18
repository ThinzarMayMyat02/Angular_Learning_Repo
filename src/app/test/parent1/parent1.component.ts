import { Component, Output, output } from '@angular/core';
import { Child1Component } from "../child1/child1.component";

@Component({
  selector: 'app-parent1',
  standalone: true,
  imports: [Child1Component],
  templateUrl: './parent1.component.html',
  styleUrl: './parent1.component.scss'
})
export class Parent1Component {

  pname:string = 'test';

  changepname(event:string){
    console.log('event: ',event);
    this.pname = event;
  }
}

import { Component, OnInit } from '@angular/core';
import { ChildComponent } from "../../child/child.component";

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent implements OnInit{


  name!:string;

  index : number = 0;

  ngOnInit(): void {
    this.name = 'Thinzar';
  }

  changeName(s:string){
    this.name = s;
  }

  reduce(){
    this.index--;
  }

  increase(){
    this.index++;
  }

  test(i : number){
    console.log("Num: ",i);
    this.index = i;
  }
}

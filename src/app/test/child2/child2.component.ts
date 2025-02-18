import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child2',
  standalone: true,
  imports: [],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.scss'
})
export class Child2Component
  implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, OnDestroy {

    num:number = 0;

    constructor() {
      console.log('log from child constructor.');
    }

    ngOnInit(): void {
      console.log('log from child ngOnInit.');
    }
    ngOnChanges(changes: SimpleChanges): void {
      console.log('log from child ngOnChanges.');
    }

    ngDoCheck(): void {
      console.log('log from child ngDoCheck.');
    }

    ngAfterContentInit(): void {
      console.log('log from child ngAfterContentInit.');
    }

    ngAfterContentChecked(): void {
      console.log('log from child ngAfterContentChecked.');
    }

    ngAfterViewInit(): void {
      console.log('log from child ngAfterViewInit.');
    }

    ngOnDestroy(): void {
      console.log('log from child ngOnDestroy.');
    }

    increase(){
      this.num++;
    }

    reduce(){
      this.num--;
    }
}

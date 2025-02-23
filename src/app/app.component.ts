import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { ParentComponent } from './testing/parent/parent.component';
import { Parent1Component } from './test/parent1/parent1.component';
import { CounterComponent } from './counter/counter.component';
import { TitleComponent } from './test/title/title.component';
import { Child2Component } from './test/child2/child2.component';
import { ReactiveForm1Component } from './forms/reactive-form1/reactive-form1.component';
import { ReactiveFormArrayComponent } from "./forms/reactive-form-array/reactive-form-array.component";
import { TemplateDriven1Component } from "./forms/template-driven1/template-driven1.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormArrayComponent, TemplateDriven1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent{
  // implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, OnDestroy {
  //title = 'angular_binding';

  //initalCount: number = 3;

  // constructor() {
  //   console.log('log from parents constructor.');
  // }

  // ngOnInit(): void {
  //   console.log('log from parents ngOnInit.');
  // }
  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log('log from parents ngOnChanges.');
  // }

  // ngDoCheck(): void {
  //   console.log('log from parents ngDoCheck.');
  // }

  // ngAfterContentInit(): void {
  //   console.log('log from parents ngAfterContentInit.');
  // }

  // ngAfterContentChecked(): void {
  //   console.log('log from parents ngAfterContentChecked.');
  // }

  // ngAfterViewInit(): void {
  //   console.log('log from parents ngAfterViewInit.');
  // }

  // ngOnDestroy(): void {
  //   console.log('log from parents ngOnDestroy.');
  // }
}

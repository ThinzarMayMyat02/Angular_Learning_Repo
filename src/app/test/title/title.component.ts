import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './title.component.html',
  styleUrl: './title.component.scss'
})
export class TitleComponent {

  @Input()
  nametest!:string;

  @Output()
  nametestChange = new EventEmitter();

  updateName(s:string){
    this.nametest = s;
    console.log('name : '+this.nametest);
    this.nametestChange.emit(this.nametest);
  }

}

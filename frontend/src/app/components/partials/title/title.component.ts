import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent {
  public margin: string;
  public fontSize: string;

  @Input()
  title!: string;

  constructor() {
    this.margin = '1.5rem 0 0rem 2.5rem';
    this.fontSize = '1.7rem';
  }
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-empty-page',
  templateUrl: './empty-page.component.html',
  styleUrls: ['./empty-page.component.css']
})
export class EmptyPageComponent {
  @Input()
  visible = false;

  @Input()
  emptyMessage = 'No data to display';

  @Input()
  resetLinkText = 'Reset';

  @Input()
  resetLinkRoute = '/';

  constructor() { }
}

import {Component, Input} from '@angular/core';

import {CardComponent} from './card.component';

@Component({
  template: `
    <div class="paper-card">
      <div class="paper-title">{{data.title}}</div>
      <div class="paper-img-container"></div>
      <div class="paper-meta-container">
        <div class="paper-meta">Author: {{data.author}}</div>
        <div class="paper-meta">Last Modified Date: {{data.lastModifiedDt}}</div>
        <div class="paper-meta">Last Read: {{data.lastRead}}</div>
        <div class="paper-meta">Tracking Since: {{data.createdDt}}</div>
      </div>
    </div>
  `,
  styleUrls: ['./paperCard.component.css']
})
export class PaperCardComponent implements CardComponent {
  @Input() data:any;
}

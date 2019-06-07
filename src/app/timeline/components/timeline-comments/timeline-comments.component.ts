import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-timeline-comments',
  templateUrl: './timeline-comments.component.html',
  styleUrls: ['./timeline-comments.component.css']
})
export class TimelineCommentsComponent {

  @Input() comments: number = 0;

  constructor() { };
}

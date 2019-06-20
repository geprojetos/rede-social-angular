import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-timeline-comments-form',
  templateUrl: './timeline-comments-form.component.html',
  styleUrls: ['./timeline-comments-form.component.css']
})
export class TimelineCommentsFormComponent implements OnInit {

  @Input() userName: string;
  @Input() comments: string;
  
  constructor() { }

  ngOnInit() {
  }

}

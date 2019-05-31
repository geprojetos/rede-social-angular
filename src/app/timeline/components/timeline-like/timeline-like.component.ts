import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-timeline-like',
  templateUrl: './timeline-like.component.html',
  styleUrls: ['./timeline-like.component.css']
})
export class TimelineLikeComponent implements OnInit {

  @Input() likes: number = 0;
  
  constructor() { }

  ngOnInit() {
  }

}

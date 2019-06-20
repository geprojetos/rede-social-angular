import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TimelineCardService } from '../../services/timeline-card/timeline-card.service';
import { CommentsInterface } from '../../interfaces/timeline-comments/timeline-comments-interface';

@Component({
  selector: 'app-timeline-comments-form',
  templateUrl: './timeline-comments-form.component.html',
  styleUrls: ['./timeline-comments-form.component.css']
})
export class TimelineCommentsFormComponent implements OnInit {

  @Input() id: number;
  @Output() yourComment = new EventEmitter<string>();

  comments: CommentsInterface;
  formComments: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _timelineService: TimelineCardService
  ) { }

  ngOnInit() {

    this._timelineService
      .getComments(this.id)
      .subscribe(res => this.comments = res, erro => console.log(erro));
    this.formComments = this._fb.group({
      comments: [
        '',
        Validators.compose([ Validators.required, Validators.maxLength(255) ])
      ]
    });
  };

  sendComments(e: Event) {

    e.preventDefault();

    const comment = this.formComments.getRawValue();

    if(!this.formComments.valid) return;

    this.yourComment.emit(comment);
    this.formComments.reset();
  };
}

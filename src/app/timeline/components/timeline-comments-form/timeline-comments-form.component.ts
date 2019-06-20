import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-timeline-comments-form',
  templateUrl: './timeline-comments-form.component.html',
  styleUrls: ['./timeline-comments-form.component.css']
})
export class TimelineCommentsFormComponent implements OnInit {

  @Input() userName: string;
  @Input() comments: string;
  @Output() yourComment = new EventEmitter<string>();
  
  formComments: FormGroup;

  constructor(
    private _fb: FormBuilder
  ) { }

  ngOnInit() {

    this.formComments = this._fb.group({
      comments: [
        '',
        Validators.compose([ Validators.required, Validators.maxLength(255) ])
      ]
    })
  };

  sendComments(e: Event) {

    e.preventDefault();
    const comment = this.formComments.getRawValue();

    if(!this.formComments.valid) {
      console.log('Campo inválido');
      return;
    };

    console.log('Send Comments');
    this.yourComment.emit(comment);
  };
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { TimelineCardService } from '../../services/timeline-card/timeline-card.service';

@Component({
  selector: 'app-timeline-add-card-page',
  templateUrl: './timeline-add-card-page.component.html',
  styleUrls: ['./timeline-add-card-page.component.css']
})
export class TimelineAddCardPageComponent implements OnInit {

  formAddCards: FormGroup;
  file: File;
  preview: string = '';

  constructor(
    private _fb: FormBuilder,
    private _timelineService: TimelineCardService
  ) { }

  ngOnInit(): void {

    this.formAddCards = this._fb.group({
      file: [
          '', 
          Validators.compose([Validators.required])
      ],
      textareaDescription: [
        '',
        Validators.compose([Validators.maxLength(300)])
      ],
      inputCheck: [true]
    })
  }

  addCard(e: Event): void {

    e.preventDefault();

    console.log('Cadastrar');
    
    let inputCheck  = this.formAddCards.get('inputCheck').value
    let textareaDescription = this.formAddCards.get('textareaDescription').value;

    console.log(this.file, inputCheck, textareaDescription);
    
    this._timelineService
      .upload(this.file, inputCheck, textareaDescription)
      .subscribe(res => {
        console.log(res);
      })
  };

  handleFile(file: File): void {
    
    const reader = new FileReader();
    console.log(reader);

    this.file = file;

    reader.readAsDataURL(file);

    reader.onload = (e: any) => this.preview = e.target.result;      
  }

}

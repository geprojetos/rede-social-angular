import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { TimelineCardService } from '../../services/timeline-card/timeline-card.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/user/service/user.service';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { MessageService } from 'src/app/shared/components/message/services/message.service';

@Component({
  selector: 'app-timeline-add-card-page',
  templateUrl: './timeline-add-card-page.component.html',
  styleUrls: ['./timeline-add-card-page.component.css']
})
export class TimelineAddCardPageComponent implements OnInit {

  formAddCards: FormGroup;
  file: File;
  preview: string = '';
  progress: number = 0;
  showProgress: number;

  constructor(
    private _fb: FormBuilder,
    private _timelineService: TimelineCardService,
    private _router: Router,
    private _userService: UserService,
    private _messageService: MessageService
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
  };

  addCard(e: Event): void {

    e.preventDefault();

    let inputCheck  = this.formAddCards.get('inputCheck').value
    let textareaDescription = this.formAddCards.get('textareaDescription').value;

    console.log(this.file, inputCheck, textareaDescription);
    
    this._timelineService
      .upload(this.file, textareaDescription, inputCheck)
      .subscribe((event: HttpEvent<any>) => {
        
        if(event.type == HttpEventType.UploadProgress) {

          this.progress = Math.round(100 * event.loaded / event.total);
        } else if(event.type == HttpEventType.Response) {

          const userName = this._userService.userNameGet();
          
          this.showProgress = this.progress;
          this._messageService.success('Card Cadastrado');
          this._router.navigate([userName, 'timeline']);
        }
      }, erro => {
        console.log(erro);
        this._messageService.warning('Não foi possível cadastrar o card, tente novamente');
      })
  };

  handleFile(file: File): void {
    
    const reader = new FileReader();

    this.file = file;

    reader.readAsDataURL(file);

    reader.onload = (e: any) => this.preview = e.target.result;      
  };

  handleClear(e: Event): void {

    this.preview = '';
    this.formAddCards.reset();
  };

};

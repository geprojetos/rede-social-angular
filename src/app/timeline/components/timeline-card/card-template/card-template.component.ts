import { Component, OnInit, Input } from '@angular/core';

const cloud = 'http://localhost:3000/imgs/';

@Component({
  selector: 'app-card-template',
  templateUrl: './card-template.component.html',
  styleUrls: ['./card-template.component.css']
})

export class CardTemplateComponent implements OnInit {
  
  private _url: string = '';

  @Input() description: string = '';

  @Input() set url(url: string) {

    if(!url.startsWith('data')) {
      this._url = cloud + url;
    } else {

      this._url = url;
    }
  };

  get url(): string {
    return this._url
  }
  
  constructor() { }

  ngOnInit() { }
}
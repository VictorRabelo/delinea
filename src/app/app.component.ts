import { Component } from '@angular/core';
import { ControllerBase } from './controller/controller.base';

import { NgxSpinnerService } from 'ngx-spinner';
import { HTTPStatus } from './helpers/httpstatus';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends ControllerBase {
  
  constructor() {
    super();
  }

  ngOnInit() {
  }
}

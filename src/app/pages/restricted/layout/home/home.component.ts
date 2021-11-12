import { Component, ViewEncapsulation } from '@angular/core';
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { CrudService } from '@app/services/crud.service';
import { ControllerBase } from 'src/app/controller/controller.base';

import { SubSink } from 'subsink';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ CrudService ],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent extends ControllerBase {

  private sub = new SubSink();

  total: number = 0;
  dados: any[];
  loading: Boolean = false;

  constructor(
    @Inject(DOCUMENT) private document: any,
    private service: CrudService
  ) { 
    super();
    this.service.setEndPoint('candidate');
  }

  ngOnInit() {
    this.loading = true;
    this.getAll();
  }

  getAll(){
    this.loading = true;
    this.sub.sink = this.service.getAll().subscribe(
      (res: any) => {
        this.loading = false;
        this.dados = res;
        this.total = this.dados.length;
      },error => console.log(error))
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}

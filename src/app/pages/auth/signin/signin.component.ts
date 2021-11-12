import { Component, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { first } from 'rxjs/operators';
import { MessageService } from 'primeng/api';

import { AuthenticationService } from '@app/services/authentication.service';
import { ControllerBase } from '@app/controller/controller.base';
import { NgxIzitoastService } from 'ngx-izitoast';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
  providers: [ MessageService ],
  encapsulation: ViewEncapsulation.None
})
export class SigninComponent extends ControllerBase {

  loading   = false;
  dados: any = {};
  returnUrl: string;
  error = '';
  param: string;

  constructor(
    public iziToast: NgxIzitoastService, 
    private title: Title,
    private messageService: MessageService, 
    private authenticationService: AuthenticationService, 
    private router: Router, 
    private snap: ActivatedRoute
  ) {
    super();

    this.snap.queryParams.subscribe(params => {
      this.param = params['error'];
    });

    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.title.setTitle('Delinea | Login');
    
    if(this.param){
      this.iziToast.error({
        title: 'Error 401!',
        message: this.param,
        position: 'topRight'
      });
    }
  }

  submit(form: NgForm) {
    
    if (!form.valid) {
      return false;
    }

    this.loading = true;
    
    this.authenticationService.login(this.dados.login, this.dados.password)
      .pipe(first())
      .subscribe(
        data => {
          this.messageService.add({key: 'bc', severity:'success', summary: `Bem - Vindo ${data.name}`, detail: this.getMessage()});
          this.loading = false;
        },
        error => {
          this.messageService.add({key: 'bc', severity:'error', summary: 'Atenção', detail: error});
          this.loading = false;
        },
        () => {
          setTimeout(() => { 
            this.router.navigate(['/restricted']); 
          }, 2000);
        }
      );
  }
}

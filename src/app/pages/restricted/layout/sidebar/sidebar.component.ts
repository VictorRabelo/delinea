import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '@app/models/user';
import { ControllerBase } from '@app/controller/controller.base';
import { AuthenticationService } from '@app/services/authentication.service';
import { Role } from '@app/models/role';

declare let $: any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SidebarComponent extends ControllerBase {

  currentUser: User;
  reason = '';
  
  constructor(private router: Router, private authenticationService: AuthenticationService) { 
    super();
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit() {
    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
    })
  }
  
  isAdmin() {
    return this.currentUser && this.currentUser.role === Role.admin;  
  }

  isDiretor() {
    return this.currentUser && this.currentUser.role === Role.diretor;  
  }

  isFinanceiro() {
    return this.currentUser && this.currentUser.role === Role.financeiro;  
  }

  isConsultor() {
    return this.currentUser && this.currentUser.role === Role.consultor;  
  }

  isClient() {
    return this.currentUser && this.currentUser.role === Role.client;  
  }

}

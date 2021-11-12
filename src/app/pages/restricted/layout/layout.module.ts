import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from "./layout.component";
import { NavTopComponent } from "./nav-top/nav-top.component";
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from "./home/home.component";
import { PerfilComponent } from './perfil/perfil.component';

// PrimeNG
import { ToastModule } from 'primeng/toast';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ProgressBarModule } from 'primeng/progressbar';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { CurrencyMaskInputMode, NgxCurrencyModule } from "ngx-currency";
import { NgxIziToastModule } from 'ngx-izitoast';
import { NgbDropdownModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ComponentsModule } from '@app/components/components.module';
import { CandidatosComponent } from '../candidatos/candidatos.component';
 
export const customCurrencyMaskConfig = {
    align: "left",
    allowNegative: true,
    allowZero: true,
    decimal: ",",
    precision: 2,
    prefix: "R$ ",
    suffix: "",
    thousands: ".",
    nullable: true,
    min: null,
    max: null,
    inputMode: CurrencyMaskInputMode.FINANCIAL
};
export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;


@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
    FormsModule,
    ComponentsModule,
    ToastModule,
    ProgressSpinnerModule,
    ProgressBarModule,
    Ng2SearchPipeModule,
    NgxIziToastModule,
    NgbModule,
    NgbDropdownModule,
    NgxCurrencyModule.forRoot(customCurrencyMaskConfig),
    NgxMaskModule.forRoot()

  ],
  declarations: [
    LayoutComponent,
    HomeComponent,
    CandidatosComponent,
    NavTopComponent,
    SidebarComponent,
    FooterComponent,
    PerfilComponent,

  ],
  exports:[
    LayoutComponent,
    HomeComponent,
    NavTopComponent,
    CandidatosComponent,
    SidebarComponent,
    FooterComponent
  ]
})
export class LayoutModule { }
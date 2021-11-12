import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatTabsModule } from '@angular/material/tabs';
import { MatStepperModule } from '@angular/material/stepper';

import { NgxMaskModule, IConfig } from 'ngx-mask';
import { CandidatosFormComponent } from './candidatos-form/candidatos-form.component';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

@NgModule({
  declarations: [
    CandidatosFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatTabsModule,
    MatStepperModule,
    NgxMaskModule,
  ],
  exports:[
    CandidatosFormComponent,
  ],
  entryComponents: [
    CandidatosFormComponent,
  ]
})
export class ComponentsModule { }

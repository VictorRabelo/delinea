import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CandidatosComponent } from '../candidatos/candidatos.component';
import { HomeComponent } from './home/home.component';
import { PerfilComponent } from './perfil/perfil.component';

const routes: Routes = [
  
  {path: '', pathMatch: 'full', redirectTo: 'home'},
      
  {path: 'home', component: HomeComponent},

  {path: 'perfil', component: PerfilComponent},
      
  {path: 'candidatos', component: CandidatosComponent},
  
];
  
@NgModule({
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [
      RouterModule
    ]
})
export class LayoutRoutingModule {}
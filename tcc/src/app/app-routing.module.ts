import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { EmpresaComponent } from './empresa/empresa.component';

const routes: Routes = [
  { path: 'home', component:HomeComponent },
  { path: 'empresa', component:EmpresaComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)
    
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

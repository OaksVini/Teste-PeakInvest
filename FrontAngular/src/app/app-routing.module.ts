import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroComponent } from './cadastro/cadastro.component';
import { ConsultaComponent } from './consulta/consulta.component';


const routes: Routes = [
  {
    path: 'cadastro',
    component: CadastroComponent,
    data: { title: 'Valor das Parcelas' }
  },
  {
    path: 'consulta',
    component: ConsultaComponent,
    data: { title: 'Buscar Nome' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

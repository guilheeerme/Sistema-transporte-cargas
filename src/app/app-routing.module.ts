import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstatisticasComponent } from './modules/estatisticas/estatisticas.component';
import { SairComponent } from './modules/sair/sair.component';
import { TransporteComponent } from './modules/transporte/transporte.component';
import { TrechoModalidadeComponent } from './modules/trecho-modalidade/trecho-modalidade.component';

const routes: Routes = [
  { path: '', component: TrechoModalidadeComponent },
  { path: 'trecho-modalidade', component: TrechoModalidadeComponent },
  { path: 'transporte', component: TransporteComponent },
  { path: 'estatisticas', component: EstatisticasComponent },
  { path: 'sair', component: SairComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

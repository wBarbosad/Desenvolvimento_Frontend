import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LancamentoComponent } from './components/views/lancamento/lancamento.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'lancamento', component: LancamentoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarSalasComponent } from './componentes/salas/listar-salas/listar-salas.component';
import { AgendarSalaComponent } from './componentes/salas/agendar-sala/agendar-sala.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listarSalas',
    pathMatch: 'full'
  },
  {
    path: 'listarSalas',
    component: ListarSalasComponent
  },
  {
    path: 'agendarSala/:id',
    component: AgendarSalaComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

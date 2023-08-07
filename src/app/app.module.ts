import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { SalasComponent } from './componentes/salas/salas.component';
import { ListarSalasComponent } from './componentes/salas/listar-salas/listar-salas.component';
import { AgendarSalaComponent } from './componentes/salas/agendar-sala/agendar-sala.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    SalasComponent,
    ListarSalasComponent,
    AgendarSalaComponent,
  ],
  imports: [
    BrowserModule,
    FullCalendarModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

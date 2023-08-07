import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { SalaService } from '../sala.service';
import { Router } from '@angular/router';
import { Sala } from '../sala';

@Component({
  selector: 'app-listar-salas',
  templateUrl: './listar-salas.component.html',
  styleUrls: ['./listar-salas.component.css']
})
export class ListarSalasComponent implements OnInit {

  salasAgendadas: Sala[] = [];

  salasDisponiveis: Sala[] = []

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin],
    height : 600,
    contentHeight: 600,
  }

  constructor(
    private service: SalaService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.service.listarSalasDisponiveis().subscribe(
      (salasDisponiveis) => {
        this.salasDisponiveis = salasDisponiveis
      });

    this.service.listarSalasAgendadas().subscribe(
      (salasAgendadas) => {
        this.salasAgendadas = salasAgendadas
    }
    )
  }

}

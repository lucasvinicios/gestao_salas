import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Sala } from '../sala';
import { SalaService } from '../sala.service';

@Component({
  selector: 'app-agendar-sala',
  templateUrl: './agendar-sala.component.html',
  styleUrls: ['./agendar-sala.component.css']
})
export class AgendarSalaComponent implements OnInit {

  sala: Sala =
    {
      id: 0,
      nome: '',
      capacidade: 0,
      recursos: '',
      data: new Date
    };


  constructor(
    private service: SalaService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.buscarPorId(parseInt(id!)).subscribe(
      (sala) => {
        this.sala = sala
      }
    )
  }

  confirmar(){
    this.service.agendarSala(this.sala).subscribe(() => {
      this.router.navigate(['/listarSalas']);
    })
  }

  cancelar(){
    this.router.navigate(['/listarSalas']);
  }

}

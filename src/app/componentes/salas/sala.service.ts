import { Sala } from './sala';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SalaService {

  private readonly API_URL = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  listarSalasDisponiveis(): Observable<Sala[]>{
    return this.http.get<Sala[]>(this.API_URL + 'salasDisponiveis');
  }

  listarSalasAgendadas(): Observable<Sala[]>{
    return this.http.get<Sala[]>(this.API_URL + 'salasAgendadas');
  }

  agendarSala(sala: Sala): Observable<Sala>{
    const url = `${this.API_URL}/${sala.id}`;
    return this.http.put<Sala>(url, sala);
  }

  buscarPorId(id: number): Observable<Sala>{
    const url = `${this.API_URL + 'SalasDisponiveis'}/${id}`;
    return this.http.get<Sala>(url);
  }
}

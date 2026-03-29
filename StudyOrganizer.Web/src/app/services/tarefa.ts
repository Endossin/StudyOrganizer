import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Tarefa {
  id?: number;
  materiaId: number;
  titulo: string;
  descricao?: string;
  concluida?: boolean;
  dataVencimento?: string;
}

@Injectable({ providedIn: 'root' })
export class TarefaService {
  private url = 'https://localhost:7065/api/Tarefas';
  constructor(private http: HttpClient) {}
  getAll(): Observable<Tarefa[]> { return this.http.get<Tarefa[]>(this.url); }
  create(t: Tarefa): Observable<Tarefa> { return this.http.post<Tarefa>(this.url, t); }
  update(id: number, t: Tarefa): Observable<void> { return this.http.put<void>(`${this.url}/${id}`, t); }
  delete(id: number): Observable<void> { return this.http.delete<void>(`${this.url}/${id}`); }
}
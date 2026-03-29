import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Anotacao {
  id?: number;
  materiaId: number;
  titulo: string;
  conteudo?: string;
}

@Injectable({ providedIn: 'root' })
export class AnotacaoService {
  private url = 'https://localhost:7065/api/Anotacoes';
  constructor(private http: HttpClient) {}
  getAll(): Observable<Anotacao[]> { return this.http.get<Anotacao[]>(this.url); }
  create(a: Anotacao): Observable<Anotacao> { return this.http.post<Anotacao>(this.url, a); }
  update(id: number, a: Anotacao): Observable<void> { return this.http.put<void>(`${this.url}/${id}`, a); }
  delete(id: number): Observable<void> { return this.http.delete<void>(`${this.url}/${id}`); }
}
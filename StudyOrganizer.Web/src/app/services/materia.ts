import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Materia {
  id?: number;
  nome: string;
  descricao?: string;
  cor?: string;
}

@Injectable({ providedIn: 'root' })
export class MateriaService {
  private url = 'https://localhost:7065/api/Materias';
  constructor(private http: HttpClient) {}
  getAll(): Observable<Materia[]> { return this.http.get<Materia[]>(this.url); }
  create(m: Materia): Observable<Materia> { return this.http.post<Materia>(this.url, m); }
  update(id: number, m: Materia): Observable<void> { return this.http.put<void>(`${this.url}/${id}`, m); }
  delete(id: number): Observable<void> { return this.http.delete<void>(`${this.url}/${id}`); }
}
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MateriaService, Materia } from '../../services/materia';

@Component({
  selector: 'app-materias',
  standalone: true,
  imports: [CommonModule, FormsModule, MatCardModule, MatButtonModule, MatInputModule, MatFormFieldModule, MatIconModule],
  templateUrl: './materias.html',
  styleUrl: './materias.scss'
})
export class MateriasComponent implements OnInit {
  materias: Materia[] = [];
  novaMateria: Materia = { nome: '', descricao: '', cor: '#4A90D9' };
  mostrarFormulario = false;

  constructor(private materiaService: MateriaService) {}

  ngOnInit() { this.carregar(); }

  carregar() {
    this.materiaService.getAll().subscribe(m => this.materias = m);
  }

  salvar() {
    this.materiaService.create(this.novaMateria).subscribe(() => {
      this.novaMateria = { nome: '', descricao: '', cor: '#4A90D9' };
      this.mostrarFormulario = false;
      this.carregar();
    });
  }

  deletar(id: number) {
    this.materiaService.delete(id).subscribe(() => this.carregar());
  }
}
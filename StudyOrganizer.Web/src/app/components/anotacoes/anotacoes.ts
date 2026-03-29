import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { AnotacaoService, Anotacao } from '../../services/anotacao';
import { MateriaService, Materia } from '../../services/materia';

@Component({
  selector: 'app-anotacoes',
  standalone: true,
  imports: [CommonModule, FormsModule, MatCardModule, MatButtonModule, MatInputModule, MatFormFieldModule, MatIconModule, MatSelectModule],
  templateUrl: './anotacoes.html',
  styleUrl: './anotacoes.scss'
})
export class AnotacoesComponent implements OnInit {
  anotacoes: Anotacao[] = [];
  materias: Materia[] = [];
  novaAnotacao: Anotacao = { materiaId: 0, titulo: '', conteudo: '' };
  mostrarFormulario = false;

  constructor(private anotacaoService: AnotacaoService, private materiaService: MateriaService) {}

  ngOnInit() {
    this.carregar();
    this.materiaService.getAll().subscribe(m => this.materias = m);
  }

  carregar() {
    this.anotacaoService.getAll().subscribe(a => this.anotacoes = a);
  }

  salvar() {
    this.anotacaoService.create(this.novaAnotacao).subscribe(() => {
      this.novaAnotacao = { materiaId: 0, titulo: '', conteudo: '' };
      this.mostrarFormulario = false;
      this.carregar();
    });
  }

  deletar(id: number) {
    this.anotacaoService.delete(id).subscribe(() => this.carregar());
  }
}
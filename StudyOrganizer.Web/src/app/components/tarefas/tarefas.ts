import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { TarefaService, Tarefa } from '../../services/tarefa';
import { MateriasService, Materia } from '../../services/materia';

@Component({
  selector: 'app-tarefas',
  standalone: true,
  imports: [CommonModule, FormsModule, MatCardModule, MatButtonModule, MatInputModule, MatFormFieldModule, MatIconModule, MatCheckboxModule, MatSelectModule],
  templateUrl: './tarefas.html',
  styleUrl: './tarefas.scss'
})
export class TarefasComponent implements OnInit {
  tarefas: Tarefa[] = [];
  materias: Materia[] = [];
  novaTarefa: Tarefa = { materialId: 0, titulo: '', descricao: '', concludia: false, prioridade: 'media' };
  mostrarFormulario = false;

  constructor(private tarefaService: TarefaService, private materiaService: MateriasService) {}

  ngOnInit() {
    this.carregar();
    this.materiaService.getAll().subscribe(m => this.materias = m);
  }

  carregar() {
    this.tarefaService.getAll().subscribe(t => this.tarefas = t);
  }

  salvar() {
    this.tarefaService.create(this.novaTarefa).subscribe(() => {
      this.novaTarefa = { materialId: 0, titulo: '', descricao: '', concludia: false, prioridade: 'media' };
      this.mostrarFormulario = false;
      this.carregar();
    });
  }

  concluir(tarefa: Tarefa) {
    tarefa.concludia = !tarefa.concludia;
    this.tarefaService.update(tarefa.id!, tarefa).subscribe();
  }

  deletar(id: number) {
    this.tarefaService.delete(id).subscribe(() => this.carregar());
  }

  getPrioridadeCor(prioridade?: string): string {
    if (prioridade === 'alta') return '#f44336';
    if (prioridade === 'media') return '#ff9800';
    return '#4caf50';
  }

  getPrioridadeLabel(prioridade?: string): string {
    if (prioridade === 'alta') return '🔴 Alta';
    if (prioridade === 'media') return '🟡 Média';
    return '🟢 Baixa';
  }
}
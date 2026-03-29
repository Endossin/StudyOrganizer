import { Routes } from '@angular/router';
import { MateriasComponent } from './components/materias/materias';
import { TarefasComponent } from './components/tarefas/tarefas';
import { CronogramaComponent } from './components/cronograma/cronograma';
import { PomodoroComponent } from './components/pomodoro/pomodoro';
import { AnotacoesComponent } from './components/anotacoes/anotacoes';
import { ProgressoComponent } from './components/progresso/progresso';

export const routes: Routes = [
  { path: '', redirectTo: 'materias', pathMatch: 'full' },
  { path: 'materias', component: MateriasComponent },
  { path: 'tarefas', component: TarefasComponent },
  { path: 'cronograma', component: CronogramaComponent },
  { path: 'pomodoro', component: PomodoroComponent },
  { path: 'anotacoes', component: AnotacoesComponent },
  { path: 'progresso', component: ProgressoComponent },
];
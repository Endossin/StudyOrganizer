import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-pomodoro',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './pomodoro.html',
  styleUrl: './pomodoro.scss'
})
export class PomodoroComponent implements OnDestroy {
  minutos = 25;
  segundos = 0;
  rodando = false;
  intervalo: any;
  sessoes = 0;

  iniciar() {
    if (this.rodando) return;
    this.rodando = true;
    this.intervalo = setInterval(() => {
      if (this.segundos > 0) {
        this.segundos--;
      } else if (this.minutos > 0) {
        this.minutos--;
        this.segundos = 59;
      } else {
        this.parar();
        this.sessoes++;
        this.resetar();
      }
    }, 1000);
  }

  parar() {
    this.rodando = false;
    clearInterval(this.intervalo);
  }

  resetar() {
    this.parar();
    this.minutos = 25;
    this.segundos = 0;
  }

  get tempoFormatado() {
    return `${String(this.minutos).padStart(2, '0')}:${String(this.segundos).padStart(2, '0')}`;
  }

  ngOnDestroy() {
    clearInterval(this.intervalo);
  }
}
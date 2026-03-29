import { Component, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-pomodoro',
  standalone: true,
  imports: [CommonModule, FormsModule, MatCardModule, MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule],
  templateUrl: './pomodoro.html',
  styleUrl: './pomodoro.scss'
})
export class PomodoroComponent implements OnDestroy {
  configEstudo = 25;
  configDescanso = 5;
  
  minutosEstudo = 25;
  segundosEstudo = 0;
  minutosDescanso = 5;
  segundosDescanso = 0;

  rodando = false;
  modoAtual: 'estudo' | 'descanso' = 'estudo';
  intervalo: any;
  sessoes = 0;

  mostrarCelebracao = false;
  mostrarAlertaDescanso = false;

  constructor(private cdr: ChangeDetectorRef) {}

  get progressoEstudo(): number {
    const total = this.configEstudo * 60;
    const atual = this.minutosEstudo * 60 + this.segundosEstudo;
    return ((total - atual) / total) * 100;
  }

  get progressoDescanso(): number {
    const total = this.configDescanso * 60;
    const atual = this.minutosDescanso * 60 + this.segundosDescanso;
    return ((total - atual) / total) * 100;
  }

  tempoFormatado(min: number, seg: number): string {
    return `${String(min).padStart(2, '0')}:${String(seg).padStart(2, '0')}`;
  }

  toggleTimer(modo: 'estudo' | 'descanso') {
    if (this.rodando && this.modoAtual === modo) {
      this.parar();
    } else {
      this.parar();
      this.modoAtual = modo;
      this.iniciar();
    }
  }

  iniciar() {
    this.rodando = true;
    this.intervalo = setInterval(() => {
      if (this.modoAtual === 'estudo') {
        if (this.segundosEstudo > 0) {
          this.segundosEstudo--;
        } else if (this.minutosEstudo > 0) {
          this.minutosEstudo--;
          this.segundosEstudo = 59;
        } else {
          this.parar();
          this.sessoes++;
          this.resetarTimer('estudo');
          this.celebrar();
        }
      } else {
        if (this.segundosDescanso > 0) {
          this.segundosDescanso--;
        } else if (this.minutosDescanso > 0) {
          this.minutosDescanso--;
          this.segundosDescanso = 59;
        } else {
          this.parar();
          this.resetarTimer('descanso');
          this.alertarDescanso();
        }
      }
      this.cdr.detectChanges();
    }, 1000);
  }

  celebrar() {
    this.mostrarCelebracao = true;
    this.tocarSom('estudo');
    setTimeout(() => {
      this.mostrarCelebracao = false;
      this.cdr.detectChanges();
    }, 4000);
  }

  alertarDescanso() {
    this.mostrarAlertaDescanso = true;
    this.tocarSom('descanso');
    setTimeout(() => {
      this.mostrarAlertaDescanso = false;
      this.cdr.detectChanges();
    }, 4000);
  }

  tocarSom(tipo: 'estudo' | 'descanso') {
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    if (tipo === 'estudo') {
      osc.frequency.setValueAtTime(523, ctx.currentTime);
      osc.frequency.setValueAtTime(659, ctx.currentTime + 0.15);
      osc.frequency.setValueAtTime(784, ctx.currentTime + 0.3);
    } else {
      osc.frequency.setValueAtTime(400, ctx.currentTime);
      osc.frequency.setValueAtTime(350, ctx.currentTime + 0.2);
    }
    gain.gain.setValueAtTime(0.3, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.8);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.8);
  }

  parar() {
    this.rodando = false;
    clearInterval(this.intervalo);
  }

  resetarTimer(modo: 'estudo' | 'descanso') {
    if (modo === 'estudo') {
      if (this.modoAtual === 'estudo') this.parar();
      this.minutosEstudo = this.configEstudo;
      this.segundosEstudo = 0;
    } else {
      if (this.modoAtual === 'descanso') this.parar();
      this.minutosDescanso = this.configDescanso;
      this.segundosDescanso = 0;
    }
  }

  aplicarConfig() {
    this.parar();
    this.minutosEstudo = this.configEstudo;
    this.segundosEstudo = 0;
    this.minutosDescanso = this.configDescanso;
    this.segundosDescanso = 0;
  }

  ngOnDestroy() {
    clearInterval(this.intervalo);
  }
}
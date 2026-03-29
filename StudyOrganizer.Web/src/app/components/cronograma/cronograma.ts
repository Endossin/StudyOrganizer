import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-cronograma',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './cronograma.html',
  styleUrl: './cronograma.scss'
})
export class CronogramaComponent {}
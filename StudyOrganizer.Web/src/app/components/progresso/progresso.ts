import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-progresso',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './progresso.html',
  styleUrl: './progresso.scss'
})
export class ProgressoComponent {}
import { Component } from '@angular/core';
import { UpperCasePipe, LowerCasePipe, TitleCasePipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [UpperCasePipe, LowerCasePipe, TitleCasePipe, DatePipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {
  title = "Pequeno teste para os títulos e pipes";

  today = new Date();
}

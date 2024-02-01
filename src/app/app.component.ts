import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { ParentDataComponent } from './components/parent-data/parent-data.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ParentDataComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  userName = 'Gasparini';

  userData = {
    email: 'thiago_engprod@outlook.com',
    role: 'admin',
  };

  title = 'curso-angular';
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-list-render',
  standalone: true,
  imports: [],
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css',
})
export class ListRenderComponent {
  animals = [
    { id: 1, name: 'Turca', type: 'Dog' },
    { id: 2, name: 'Tom', type: 'Cat' },
    { id: 3, name: 'Frida', type: 'Dog' },
    { id: 4, name: 'Bob', type: 'Horse' },
  ];
}

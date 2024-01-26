import { Component } from '@angular/core';
import { Animal } from '../../Animal';

@Component({
  selector: 'app-list-render',
  standalone: true,
  imports: [],
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css',
})
export class ListRenderComponent {
  animals: Animal[] = [
    { id: 1, name: 'Turca', type: 'Dog', age: 5 },
    { id: 2, name: 'Tom', type: 'Cat', age: 3 },
    { id: 3, name: 'Frida', type: 'Dog', age: 1 },
    { id: 4, name: 'Bob', type: 'Horse', age: 8 },
  ];

  animal: Animal = {
    id: 1,
    name: 'Lupi',
    type: 'Dog',
    age: 15,
  };

  animalAge: string = '';

  showAge(animal: Animal): void {
    this.animalAge = `O pet ${animal.name} tem ${animal.age}`
  }

  clearInfo(): void {
    this.animalAge = '';
  }
}

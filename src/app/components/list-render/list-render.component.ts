import { Component } from '@angular/core';
import { Animal } from '../../Animal';
import { ListService } from '../../services/list.service';

@Component({
  selector: 'app-list-render',
  standalone: true,
  imports: [],
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css',
})
export class ListRenderComponent {
  animals: Animal[] = [];

  animal: Animal = {
    id: 1,
    name: 'Lupi',
    type: 'Dog',
    age: 15,
  };

  animalAge: string = '';

  constructor(private listService: ListService) {
    this.getAnimals();
  }

  showAge(animal: Animal): void {
    this.animalAge = `O pet ${animal.name} tem ${animal.age}`;
  }

  clearInfo(): void {
    this.animalAge = '';
  }

  removeAnimal(animal: Animal): void {
    this.animals = this.listService.remove(this.animals, animal);
  }

  incAge(animal: Animal): void {
    this.listService.incAge(animal);
  }

  getAnimals(): void {
    this.listService.getAll().subscribe((response) => (this.animals = response));
  }
}

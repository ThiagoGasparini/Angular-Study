import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Animal } from '../../Animal';
import { ListService } from '../../services/list.service';

@Component({
  selector: 'app-list-render',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css',
})
export class ListRenderComponent {
  animals: Animal[] = [];

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
    this.animals = this.animals.filter((a) => a.name !== animal.name);
    this.listService.remove(animal.id).subscribe();
  }

  incAge(animal: Animal): void {
    this.listService.incAge(animal);
  }

  getAnimals(): void {
    this.listService
      .getAll()
      .subscribe((response) => (this.animals = response));
  }
}

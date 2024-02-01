import { Component } from '@angular/core';
import { ListService } from '../../services/list.service';
import { Animal } from '../../Animal';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-detail',
  standalone: true,
  imports: [],
  templateUrl: './item-detail.component.html',
  styleUrl: './item-detail.component.css',
})
export class ItemDetailComponent {
  animal?: Animal;

  constructor(private listService: ListService, private route: ActivatedRoute) {
    this.getAnimal();
  }

  getAnimal() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.listService.getItem(id).subscribe((response) => (this.animal = response));
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  standalone: true,
  imports: [],
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.css'
})
export class FirstComponentComponent {
  name: string = "Thiago";
  age: number = 30;
  car = {
    name: "Gol G4",
    year: 2013,
  }

  constructor() {}

  ngOnInit(): void {}


}

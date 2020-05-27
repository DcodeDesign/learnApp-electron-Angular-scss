import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-variable',
  templateUrl: './variable.component.html',
  styleUrls: ['./variable.component.scss']
})
export class VariableComponent implements OnInit {

  // Propriétés
  weather: string = 'ensoleillé';
  obj: any = {weather: 'ensoleillé'};
  temp = 35;

  constructor() { }

  ngOnInit(): void {
  }

  // Méthode
  getWeather() {
    return 'ensoleillé';
  }


}

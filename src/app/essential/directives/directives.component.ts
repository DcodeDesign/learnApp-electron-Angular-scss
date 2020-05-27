import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {

  items=["Jean", "Dupont", "Sarha", "Henri", "Kirk"];

  constructor() { }

  ngOnInit(): void {
  }

}

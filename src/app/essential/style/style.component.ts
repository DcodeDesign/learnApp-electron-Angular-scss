import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.scss']
})
export class StyleComponent implements OnInit {

  items=["Jean", "Dupont", "Sarha", "Henri", "Kirk"];
  color= true;

  constructor() { }

  ngOnInit(): void {
  }

}

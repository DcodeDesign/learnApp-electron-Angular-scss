import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evenements',
  templateUrl: './evenements.component.html',
  styleUrls: ['./evenements.component.scss']
})
export class EvenementsComponent implements OnInit {

  responce :string;

  constructor() { }

  ngOnInit(): void {
  }

  userClick() {
    this.responce = "Tu as cliqué sur le button";
  }

}

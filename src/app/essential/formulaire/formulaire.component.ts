import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss']
})
export class FormulaireComponent implements OnInit {

  userInput: string = "Hello";

  userInputC  = new FormControl('Hello');

  userForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl('')
  });

  constructor() { }

  ngOnInit(): void {
  }

  showForm(){
    console.log(this.userForm);
  }
}

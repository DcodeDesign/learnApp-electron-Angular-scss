import { Component, OnInit } from '@angular/core';
import {DateService} from "../services/date.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent implements OnInit {

  userForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl('')
  });

  //dateService : DateService;

  constructor(public dateService : DateService) {
    this.dateService = dateService;
  }

  ngOnInit(): void {
    this.dateService.date;
  }

  showForm(){
    console.log(this.userForm);
  }
}

import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {timer} from "rxjs";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-transport-api',
  templateUrl: './transport-api.component.html',
  styleUrls: ['./transport-api.component.scss']
})
export class TransportAPIComponent implements OnInit {

  trainData;



  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://transport.opendata.ch/v1/connections?from=Lausanne&to=Genève')
      .subscribe(
        (value)=> this.trainData = value
      )

    var number;
    timer(1000,2000)
        .pipe(
          map(number => number + 1)
        )
        .subscribe(
          (number) => console.log(number)
        )
  }

}

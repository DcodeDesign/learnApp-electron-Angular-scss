import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { Router } from "@angular/router";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  route: string= "essential";

  public MenuSelected: string;

  constructor(location: Location, router: Router) {
    router.events.subscribe(val => {
      if (location.path() != "") {
        this.route = location.path();
        this.MenuSelected = this.route.split("/")[1];
      } else {
        this.MenuSelected = this.route;
      }
    });
  }

  ngOnInit(): void {

  }

}

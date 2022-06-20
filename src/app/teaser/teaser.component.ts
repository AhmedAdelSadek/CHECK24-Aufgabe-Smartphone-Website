import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "teaser",
  templateUrl: "./teaser.component.html",
  styleUrls: ["./teaser.component.scss"],
})
export class TeaserComponent implements OnInit {
  constructor(public Router: Router) {}

  ngOnInit() {}

}

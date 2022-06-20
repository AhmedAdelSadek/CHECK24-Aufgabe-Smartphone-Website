import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ProductService } from "../product.service";

@Component({
  selector: "header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  constructor(public Router: Router, public productService: ProductService) {}

  ngOnInit() {
  }

  openFavComp() {
    this.Router.navigate(["/merkZettel"]);
  }

  backToMainPage() {
    this.Router.navigate(["/"]);
  }

  openNav() {
    (<HTMLElement>document.getElementById("myNav")).style.width = "100%";
    (<HTMLElement>document.getElementById("myNav")).style.display = "block";
  }

  closeNav() {
    (<HTMLElement>document.getElementById("myNav")).style.display = "none";
  }
}

import { Component, OnInit } from "@angular/core";
import { ProductService } from "../product.service";

@Component({
  selector: "merkzettel",
  templateUrl: "./merkzettel.component.html",
  styleUrls: ["./merkzettel.component.css"],
})
export class MerkzettelComponent implements OnInit {
  constructor(public productService: ProductService) {
    console.log(this.productService.merkzettelArray);
  }

  ngOnInit() {}

  clickFav(index: number, star: boolean) {
    console.log(star);
    this.productService.merkzettelArray[index].star = star = !star;
    this.productService.merkzettelArray.splice(index, 1);
  }
}

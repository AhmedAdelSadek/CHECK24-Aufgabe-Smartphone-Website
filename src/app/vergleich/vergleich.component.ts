import {
  AfterViewInit,
  Component,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";
import { ProductService } from "../product.service";

@Component({
  selector: "vergleich",
  templateUrl: "./vergleich.component.html",
  styleUrls: ["./vergleich.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class VergleichComponent implements OnInit, AfterViewInit {
  constructor(public productService: ProductService) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.setDefaultTap();
    var modal = <HTMLElement>document.getElementById("favDialog");
    var span = <HTMLElement>document.getElementsByClassName("close")[0];
    span.onclick = function () {
      modal.style.display = "none";
    };
  }

  setDefaultTap() {
    (<HTMLElement>document.getElementById("defaultOpen")).click();
  }

  openDialog() {
    var modal = <HTMLElement>document.getElementById("favDialog");
    modal.style.display = "block";
  }

  close() {
    var modal = <HTMLElement>document.getElementById("favDialog");
    modal.style.display = "none";
  }

  /**
   * Opens tap
   * @param evt
   * @param cityName
   */
  openTap(evt: any, cityName: string) {
    var i, tabcontent: HTMLCollectionOf<any>, tablinks: HTMLCollectionOf<any>;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    (<HTMLElement>document.getElementById(cityName)).style.display = "block";
    evt.currentTarget.className += " active";
  }

  /**
   * Clicks my fav
   * @param index
   * @param star
   */
  clickMyFav(index: number, star: boolean) {
    this.productService.dataPhones[index].star = star = !star;

    if (this.productService.dataPhones[index].star) {
      this.productService.merkzettelArray.push(
        this.productService.dataPhones[index]
      );
    } else {
      var id = this.productService.dataPhones[index].id;
      var index = this.productService.merkzettelArray.findIndex((o: any) => {
        return o.id === id;
      });
      if (index !== -1) this.productService.merkzettelArray.splice(index, 1);
    }
  }
}

import { Component, OnInit } from "@angular/core";
import { Subject } from "rxjs";
import { ProductService } from "../product.service";


@Component({
  selector: "board",
  templateUrl: "board.component.html",
  styleUrls: ["board.component.css"],
})
export class BoardComponent implements OnInit {
  _unsubscribeAll: Subject<any>;

  /**
   * on destroy
   */
  ngOnDestroy(): void {
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }

  constructor(public productService: ProductService) {
    this._unsubscribeAll = new Subject();
  }

  ngOnInit() {}
}

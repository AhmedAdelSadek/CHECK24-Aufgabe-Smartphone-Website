import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable, of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  dataPhones: any[] = [];
  popularity: any[] = [];
  merkzettelArray: any[] = [];

  brands: string[] = [
    "../assets/images/brands/apple.png",
    "../assets/images/brands/asus.png",
    "../assets/images/brands/dell.png",
    "../assets/images/brands/google.png",
    "../assets/images/brands/htc.png",
    "../assets/images/brands/huawei.png",
    "../assets/images/brands/lenovo.png",
    "../assets/images/brands/lg.png",
    "../assets/images/brands/motorola.png",
    "../assets/images/brands/nokia.png",
    "../assets/images/brands/panasonic.png",
    "../assets/images/brands/samsung.png",
    "../assets/images/brands/sony.png",
    "../assets/images/brands/xiaomi.png",
  ];
  grouped: Map<any, any>;
  sortedData: { name: any; value: any }[];
  selectedData: { name: any; value: any }[];

  constructor(private httpClient: HttpClient) {
    this.getDataPhones().subscribe();
  }

  getBrands(): Observable<any[]> {
    return of(this.brands);
  }

  getDataPhones() {
    return this.httpClient.get("assets/handy.json").pipe(
      map((d: any) => {
        this.dataPhones = d;

        this.createStarProp();

        // aggregate property in array of objects by brand
        this.grouped = this.groupBy(this.dataPhones, (pet) => pet.brand);
        console.log(this.grouped);

        // convert from Map to Array
        let array = Array.from(this.grouped, ([name, value]) => ({
          name,
          value,
        }));
        console.log(array);

        // sorting array
        this.sortedData = array.sort((a, b) => (a.value < b.value ? 1 : -1));
        console.log(this.sortedData);

        // get The 4 manufacturers with the most smartphone sales
        this.sortedData.length = 4;
        this.selectedData = this.sortedData;
        console.log(this.selectedData);
      })
    );
  }

  getPopularity() {
    return this.dataPhones.filter((ele) => {
      return ele.rating >= 4;
    });
  }

  /**
   * Groups by
   * @param list
   * @param keyGetter
   * @returns
   */
  groupBy(list: any[], keyGetter: (arg: any) => any) {
    const map = new Map();
    list.forEach((item) => {
      const key = keyGetter(item);
      const collection = map.get(key);

      if (!collection) {
        map.set(key, [item]);
      } else {
        collection.push(item);
      }
    });
    return map;
  }

  /**
   * create new property star
   */
  createStarProp() {
    this.dataPhones.forEach((ele) => {
      ele["star"] = false;
    });
  }
}

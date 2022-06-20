import { registerLocaleData } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import localeDe from "@angular/common/locales/de";
import localeDeExtra from "@angular/common/locales/extra/de";
import { LOCALE_ID, NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatNativeDateModule } from "@angular/material/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { BoardComponent } from "./board/board.component";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { MerkzettelComponent } from "./merkzettel/merkzettel.component";
import { ProductService } from "./product.service";
import { TeaserComponent } from "./teaser/teaser.component";
import { VergleichComponent } from "./vergleich/vergleich.component";
registerLocaleData(localeDe, "de-DE", localeDeExtra);

// solve problem => Missing locale data for the locale "de-DE".
// https://codehunter.cc/a/typescript/missing-locale-data-for-the-locale-de-de

const routes: Routes = [
  { path: "board", component: BoardComponent },
  { path: "merkZettel", component: MerkzettelComponent },
   { path: "", redirectTo: "board", pathMatch: "full" },
];
@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    HeaderComponent,
    TeaserComponent,
    VergleichComponent,
    FooterComponent,
    MerkzettelComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    ProductService,
    {
      provide: LOCALE_ID,
      useValue: "de-DE", // 'de-DE' for Germany
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

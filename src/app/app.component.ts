import { Component } from "@angular/core";
import { DividerComponent } from "./components/common/divider/divider.component";
import { CardsComponent } from "./components/layout/cards/cards.component";
import { FooterComponent } from "./components/layout/footer/footer.component";
import { HeaderComponent } from "./components/layout/header/header.component";
import { MainSectionComponent } from "./components/layout/main-section/main-section.component";
import { SocialBrandsComponent } from "./components/layout/social-brands/social-brands.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    HeaderComponent,
    MainSectionComponent,
    SocialBrandsComponent,
    CardsComponent,
    FooterComponent,
    DividerComponent,
  ],
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "couply";
}

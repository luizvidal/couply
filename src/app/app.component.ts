import { Component, signal } from "@angular/core";
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

  cards = signal<
    {
      title: string;
      price: number;
      imagePath: string;
    }[]
  >([
    {
      title: "Women's Nike Shoes",
      price: 99,
      imagePath: "images/nike-shoes.jpeg",
    },
    {
      title: "Headphones",
      price: 39,
      imagePath: "images/headphones.jpeg",
    },
    {
      title: "Quiky Arrows",
      price: 14,
      imagePath: "images/arrows.jpeg",
    },
    {
      title: "Heels",
      price: 79,
      imagePath: "images/heels.jpeg",
    },
    {
      title: "Cool Shades",
      price: 59,
      imagePath: "images/sun-glasses.jpeg",
    },
    {
      title: "Alcohol",
      price: 19,
      imagePath: "images/alcohol.jpeg",
    },
  ]);
}

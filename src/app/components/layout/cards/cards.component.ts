import { Component, Input } from "@angular/core";

@Component({
  selector: "app-cards",
  standalone: true,
  imports: [],
  templateUrl: "./cards.component.html",
  styleUrl: "./cards.component.scss",
})
export class CardsComponent {
  protected price = "";
  protected imagePath = "";

  @Input() size: "desktop" | "tablet" | "mobile" = "desktop";
  @Input() title = "";

  @Input("price") set setPrice(price: string | number) {
    this.price = `$${price}`;
  }

  @Input("imagePath") set setImagePath(imagePath: string) {
    this.imagePath = "../../assets/" + imagePath;
  }


}

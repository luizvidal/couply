import { Component, signal } from "@angular/core";

@Component({
  selector: "app-social-brands",
  standalone: true,
  imports: [],
  templateUrl: "./social-brands.component.html",
  styleUrl: "./social-brands.component.scss",
})
export class SocialBrandsComponent {
  socialIconPaths = signal([
    "../../../../assets/icons/social/amazon-logo.svg",
    "../../../../assets/icons/social/best-buy-logo.svg",
    "../../../../assets/icons/social/shopify-logo.svg",
    "../../../../assets/icons/social/walmart-logo.svg",
  ]);
}

import { Component, signal } from "@angular/core";
import { ButtonComponent } from "../../common/button.component";

@Component({
  selector: "app-main-section",
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: "./main-section.component.html",
  styleUrl: "./main-section.component.scss",
})
export class MainSectionComponent {
  imagesPath = signal([
    "../../../../assets/images/persons/man-01.jpg",
    "../../../../assets/images/persons/man-03.jpg",
    "../../../../assets/images/persons/woman-01.jpg",
    "../../../../assets/images/persons/woman-02.jpg",
    "../../../../assets/images/persons/woman-03.jpg",
  ]);

  singleImagePath = signal("../../../../assets/images/persons/man-02.jpg");
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-logo',
  standalone: true,
  template: `
    <div class="container">
      <img src="../../../../assets/icons/clip-path-group.svg" />
      <img src="../../../../assets/icons/couply.svg" />
    </div>
  `,
  styles: `
      div {
      display: flex;
      justify-content: center;
      gap: .5rem;
    }
  `,
})
export class LogoComponent {}

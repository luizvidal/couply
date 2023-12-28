import { Component } from '@angular/core';
import { ButtonComponent } from '../../common/button.component';
import { DividerComponent } from '../../common/divider/divider.component';
import { LogoComponent } from '../../common/logo.component';
import { NavBarComponent } from '../../common/nav-bar/nav-bar.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavBarComponent, LogoComponent, ButtonComponent, DividerComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}

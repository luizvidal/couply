import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgClass],
  template: `
    <button [ngClass]="{ border, 'primary-text' : primaryText   }">
      <ng-content></ng-content> @if(iconPath) {
      <img [src]="iconPath" alt="" />
      }
    </button>
  `,
  styles: `button {
  display: flex;


  width: 100%;
  height: 100%;
  padding: 14px 11px;
  justify-content: center;
  align-items: center;
  gap: 16px;
  border-radius: 4px;
  border: 1px solid #000;
  background: #c6dbbd;

  &:hover {
    background: #b2c8a9;
    cursor: pointer;
  }

  &.border {
    border-radius: 4px;
    border: 2px solid #000;
    background: #9BC588;
    box-shadow: 4px 4px 0px 0px #000;

  }

  &.primary-text {
    color: #000;
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
}
`,
})
export class ButtonComponent {
  @Input() iconPath = '';
  @Input() border = false;
  @Input() primaryText = false;
}

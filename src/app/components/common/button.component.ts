import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  template: `
    <button>
      Start Saving @if(iconPath) {
      <img [src]="iconPath" alt="" />
      }
    </button>
  `,
  styles: `button {
  display: flex;
  width: 164px;
  height: 36px;
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
}
`,
})
export class ButtonComponent {
  @Input() iconPath = '../../../../assets/icons/arrow-down.svg';
}

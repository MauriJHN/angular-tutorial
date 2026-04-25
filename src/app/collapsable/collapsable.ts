import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-collapsable',
  imports: [CommonModule],
  template: `
    <div class="collapsable-box" (click)="toggle()">
      <div class="collapsable-header">
        <span class="collapsable-icon">{{ isExpanded ? '▼' : '▶' }}</span>
        <span class="collapsable-title">{{ title }}</span>
      </div>
      @if (isExpanded) {
        <div class="collapsable-content">
          <ng-content></ng-content>
        </div>
      }
    </div>
  `,
  styles: [`
    .collapsable-box {
      border: 1px solid #ccc;
      border-radius: 4px;
      margin: 8px 0;
      cursor: pointer;
    }
    .collapsable-header {
      padding: 12px;
      background: #f5f5f5;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .collapsable-header:hover {
      background: #e8e8e8;
    }
    .collapsable-icon {
      font-size: 12px;
    }
    .collapsable-title {
      font-weight: 500;
    }
    .collapsable-content {
      padding: 12px;
      border-top: 1px solid #ccc;
    }
  `],
})
export class Collapsable {
  @Input() title = 'Click to expand';

  isExpanded = false;

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}

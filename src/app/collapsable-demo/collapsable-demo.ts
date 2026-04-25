import { Component } from '@angular/core';
import { Collapsable } from '../collapsable/collapsable';

@Component({
  selector: 'app-collapsable-demo',
  imports: [Collapsable],
  template: `
  <app-collapsable title="Details">
    <p>This is the expanded content!</p>
  </app-collapsable>
  `,
  styles: ``,
})
export class CollapsableDemo {

}

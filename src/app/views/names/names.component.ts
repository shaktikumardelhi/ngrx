import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-names',
  template: `<router-outlet></router-outlet>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NamesComponent {}

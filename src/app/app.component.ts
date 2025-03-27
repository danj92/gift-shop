import { Component } from '@angular/core';
import type { TestMyModel } from './test-interface-my';

@Component({
  selector: 'gif-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  ble: TestMyModel = { name: 'asd' };

  constructor() {
    this.myTest(1);
  }

  public myTest(a: number, _b?: number): number {
    // const ble = 123;
    //
    // const ble2 = 456;
    // console.log('TES');
    return a;
  }
}

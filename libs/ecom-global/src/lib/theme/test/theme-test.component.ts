import { Component } from "@angular/core";

@Component({
  selector: 'ecom-challenger-theme-test',
  template: `<div [ecomTheme] = "'default'"></div>`,
  styles: []
})
export class ThemeTestComponent {
  constructor() {}
}

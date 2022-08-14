import { Directive, ElementRef, Input, OnInit } from "@angular/core";
import { ThemeNames } from "./theme";
import { ThemeService } from "./theme.service";

@Directive({
  selector: '[ecomTheme]',
})
export class ThemeDirective implements OnInit  {
  @Input() ecomTheme: string;

  constructor(private themeService: ThemeService, private elm: ElementRef) {}

  ngOnInit(): void {
    if ((<any>Object).values(ThemeNames).includes(this.ecomTheme)) {
      this.themeService.applyThemeForElm(this.elm,this.ecomTheme)
    }
  }
}

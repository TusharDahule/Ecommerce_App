import { DOCUMENT } from "@angular/common";
import { PropertyRead } from "@angular/compiler";
import { ElementRef, Inject, Injectable } from "@angular/core";
import { BehaviorSubject, ObjectUnsubscribedError } from "rxjs";
import { defaultThemeVariables } from "../themes/default-theme-variables";
import { Theme, ThemeDefault, ThemeNames, ThemeSales, ThemeSalesNonVolt } from "./theme";

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private mainTheme$: BehaviorSubject<Theme> = new BehaviorSubject(ThemeDefault);
  private readonly startTheme: Theme;

  private themeDefault: Theme = ThemeDefault;
  private themeSales: Theme = ThemeSales;
  private themeSalesNonvolt: Theme = ThemeSalesNonVolt;

  private themeNames = ThemeNames;
  private themeVars = Object.keys(defaultThemeVariables);

  public currentTheme: Theme = this.themeDefault;


  constructor(@Inject(DOCUMENT) document: Document) {
    this.mainTheme$.subscribe(this.onThemeChange.bind(this));
    this.startTheme = { name: null, properties: {}};
    this.themeVars.forEach((cssVar) => {
      this.startTheme.properties[cssVar] = getComputedStyle(document.documentElement).getPropertyValue(cssVar);
    });
  }

  async onThemeChange (mainTheme: Theme) {
    this.currentTheme = mainTheme;
    Object.keys(this.currentTheme.properties).forEach((property) => {
      document.documentElement.style.setProperty(property, this.currentTheme.properties[property]);
    });
  }

  setMainTheme(name: Theme) {
    if (name === this.themeDefault) {
      name =  this.startTheme;
    }
    this.mainTheme$.next(name);
  }

  applyTheme(themeName: string) {
    const theme = this.getThemeByName(themeName);
    this.setMainTheme(theme);
  }

  resetTheme() {
    this.setMainTheme(this.themeDefault);
  }

  applyThemeForElm(elm: ElementRef, themeName: string) {
    const theme = this.getThemeByName(themeName);
    Object.keys(theme.properties).forEach((property) => {
      elm.nativeElement.style.setProperty(property, theme.properties[property]);
    });
  }

  private getThemeByName(themeName: string) {
    let theme: Theme;

    switch(themeName) {
      case this.themeNames.SALES:
        theme = this.themeSales;
        break;
      case this.themeNames.SALES_NON_VOLT:
        theme = this.themeSalesNonvolt;
        break;

      /* and so on */
      default:
        theme = this.themeDefault;
        break;
    }

    return theme;
  }
}



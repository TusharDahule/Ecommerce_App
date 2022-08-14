import { jsDocComment } from "@angular/compiler";
import { TestBed } from "@angular/core/testing";
import { JQueryStyleEventEmitter } from "rxjs/internal/observable/fromEvent";
import { ThemeDefault, ThemeNames, ThemeSalesVmo2 } from "../theme";
import { ThemeService } from "../theme.service"

describe('ThemeService', () => {
  let service: ThemeService;
  let setMainTheme: jest.Mock;
  const themeSalesPink = ThemeSalesVmo2;
  const themeDefault = ThemeDefault;

  beforeEach(() => {
    setMainTheme = jest.fn();

    TestBed.configureTestingModule({
      providers: [ThemeService],
      declarations: [],
    });

    service = TestBed.inject(ThemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  })

  it('ThemeService: applyTheme should call setMainTheme with the theme by fetching theme by theme name which is passed as argument', () => {
    jest.spyOn(service, 'setMainTheme');
    service.applyTheme(ThemeNames.SALES_VMO2);

    expect(service.setMainTheme).toHaveBeenCalledWith(themeSalesPink);
  })

  it('ThemeService: resetTheme should call setMainTheme with default theme', () => {
    jest.spyOn(service, 'setMainTheme');
    service.resetTheme();

    expect(service.setMainTheme).toHaveBeenCalledWith(themeDefault);
  })

})

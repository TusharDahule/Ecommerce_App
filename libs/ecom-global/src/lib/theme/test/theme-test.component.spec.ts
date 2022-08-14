import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ThemeModule } from "../theme.module";
import { ThemeService } from "../theme.service";
import { ThemeTestComponent } from "./theme-test.component";

describe('ThemeTestComponent', () => {
  let component: ThemeTestComponent;
  let fixture: ComponentFixture<ThemeTestComponent>;

  const mockThemeService = {
    applyThemeForElm: jest.fn(),
  }

  beforeEach(async () => {
    TestBed.overrideProvider(ThemeService, {useValue: mockThemeService});

    await TestBed.configureTestingModule({
      imports: [ThemeModule],
      providers: [ThemeService]
    }).compileComponents();
  });

  beforeEach(()=> {
    fixture = TestBed.createComponent(ThemeTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', ()=> {
    expect(component).toBeTruthy();
    fixture.detectChanges();
    expect(mockThemeService.applyThemeForElm).toHaveBeenCalled();
  })

});

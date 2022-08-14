import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ThemeDirective } from "./theme.directive";

@NgModule({
  declarations: [ThemeDirective],
  exports: [ThemeDirective],
  imports: [CommonModule]
})

export class ThemeModule {}

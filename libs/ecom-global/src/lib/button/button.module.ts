import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { BaseComponentModule } from "../base";
import { ButtonComponent } from "./button.component";

@NgModule({
  declarations: [ButtonComponent],
  exports: [ButtonComponent],
  imports: [CommonModule, BaseComponentModule, RouterModule],
})

export class ButtonModule {}

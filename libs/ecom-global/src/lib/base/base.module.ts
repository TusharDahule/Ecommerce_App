import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BaseComponent } from './base.component';

@NgModule({
  declarations: [BaseComponent],
  exports: [BaseComponent],
  imports: [CommonModule],
})
export class BaseComponentModule {}

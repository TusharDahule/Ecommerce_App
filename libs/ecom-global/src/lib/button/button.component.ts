import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BaseComponent } from '../base';
import {
  ButtonLevel,
  ButtonSize,
  ButtonStyle,
  ButtonTarget,
  ButtonType,
} from './button.interface';

const BASE_CSS_CLASS = 'button';
const WRAP_CSS_CLASS = 'wrap-content';

@Component({
  selector: 'ecom-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent extends BaseComponent implements OnInit {
  readonly ButtonType = ButtonType;
  cssClasses = '';

  @Input() type: ButtonType = ButtonType.BUTTON;
  @Input() level: ButtonLevel = ButtonLevel.PRIMARY;
  @Input() size: ButtonSize = ButtonSize.MEDIUM;
  @Input() styles: ButtonStyle[] = [];
  @Input() href?: string;
  @Input() disabled?: boolean;
  @Input() target?: ButtonTarget;
  @Input() routerLink?: string | any[];
  @Input() iconClasses?: string;
  @Input() wrapContent?: boolean;
  @Output() buttonClick = new EventEmitter<MouseEvent>();

  private get levelModifier(): string {
    return this.resolveThis(this.level, ButtonLevel, BASE_CSS_CLASS);
  }

  private get sizeModifier(): string {
    return this.resolveThis(this.size, ButtonSize, BASE_CSS_CLASS);
  }

  private get styleModifier(): string {
    const styles: string[] = this.styles.map((style: ButtonStyle) => {
      return this.resolveThis(style, ButtonStyle, BASE_CSS_CLASS);
    });

    return Array.from(new Set(styles)).join(' ');
  }

  private get contentWrappingClass(): string {
    return this.wrapContent ? WRAP_CSS_CLASS: '';
  }

  private resolveThis(value, enm, base: string = ''): string {
    let mod: string = null;
    Object.keys(enm).forEach((key) => {
      mod = !mod && +value === enum[key] ? key.toLowerCase().replace('_','-') : mod;
    });

    return `${base}--${mod}`;
  }

  ngOnInit(): void {
    this.setupCyTags('ecom-button', this.type.toString());
    this.cssClasses = `${BASE_CSS_CLASS} ${this.levelModifier} ${this.sizeModifier} ${this.styleModifier}  ${this.contentWrappingClass}`.trim();
  }

  onButtonClick(e: MouseEvent) {
    this.buttonClick.emit(e);
  }
}

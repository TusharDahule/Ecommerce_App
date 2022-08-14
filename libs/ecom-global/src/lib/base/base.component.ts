import { Component, HostBinding, Input } from "@angular/core";

@Component({ template: ''})
export class BaseComponent {
  @Input() id:string;
  @HostBinding('attr.cy-data') cyData: string;

  setupCyTags( component: string, type?: string) {
    this.cyData = component + (type ? `-${type}` : '') + (this.id ? `-${this.id}`: '');
  }
}

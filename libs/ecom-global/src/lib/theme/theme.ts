import { defaultThemeVariables } from "../themes/default-theme-variables";
import { salesThemeVariables } from "../themes/sales-theme-variables";
import { salesVmo2ThemeVariables } from "../themes/sales-vmo2-theme-variables";

export interface Theme {
  name: string,
  properties: any;
};

export enum ThemeNames {
  DEFAULT = 'default',
  CARE = 'care',
  SALES = 'sales',
  MYVM = 'myvm',
  CUSTOM = 'custom',
  SALES_VMO2 = 'sales_vmo2',
  VMO2 =  'vmo2',
  SALES_NON_VOLT = 'sales_non_volt'
};

// note each new theme should contain all the properties of the default

export const ThemeDefault: Theme = {
  name: ThemeNames.DEFAULT,
  properties: defaultThemeVariables
};


export const ThemeSales: Theme = {
  name: ThemeNames.SALES,
  properties: salesThemeVariables
};

export const ThemeSalesVmo2: Theme = {
  name: ThemeNames.SALES_VMO2,
  properties: salesVmo2ThemeVariables
};

export const ThemeSalesNonVolt: Theme = {
  name: ThemeNames.SALES_NON_VOLT,
  properties: salesVmo2ThemeVariables
};



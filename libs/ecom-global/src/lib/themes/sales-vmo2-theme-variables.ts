import { defaultThemeVariables } from "./default-theme-variables";
import { color } from "./variable-constants";

export const salesVmo2ThemeVariables = {
  ...defaultThemeVariables,
  '--primary-color': color.ecomBlue,
  '--secondary-color': color.shadowPurple,
  '--tertiary-color': color.ecomRed

  /* override as per requirement */
};

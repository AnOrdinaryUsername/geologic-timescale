import { DefaultTheme } from "styled-components/macro";

export const BILLION_YEARS = "10000px";

export const BREAKPOINT_SIZES = {
  sm: 576,
  med: 768,
  lg: 992,
};

/*
 *  Mobile first responsive breakpoints based on Bootstrap.
 *  https://getbootstrap.com/docs/4.0/layout/overview/#responsive-breakpoints
 */
export const BREAKPOINTS = {
  sm: `(min-width: ${BREAKPOINT_SIZES.sm}px)`,
  med: `(min-width: ${BREAKPOINT_SIZES.med}px)`,
  lg: `(min-width: ${BREAKPOINT_SIZES.lg}px)`,
};

export const THEME: DefaultTheme = {
  breakpoints: BREAKPOINTS,
};

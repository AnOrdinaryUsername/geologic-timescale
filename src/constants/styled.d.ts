import {} from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    breakpoints: {
      sm: string;
      med: string;
      lg: string;
    };
  }
}

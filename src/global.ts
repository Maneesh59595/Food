import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    body {
      margin: 0; line-height: normal;
    }
:root {

/* fonts */
--font-urbanist: Urbanist;
--font-pacifico: Pacifico;

/* font sizes */
--font-size-base: 16px;
--font-size-sm: 14px;
--font-size-45xl: 64px;
--font-size-xs: 12px;
--font-size-13xl: 32px;
--font-size-lg: 18px;
--font-size-21xl: 40px;
--font-size-5xl: 24px;
--font-size-9xl: 28px;

/* Colors */
--color-gray-100: #221f1b;
--color-gray-200: rgba(255, 255, 255, 0.2);
--color-gray-300: rgba(255, 255, 255, 0.05);
--color-gray-400: rgba(0, 0, 0, 0.2);
--color-darkslategray-100: #474037;
--color-darkslategray-200: #39332c;
--color-crimson: #cf2830;
--color-linen-100: #f2e9dd;
--color-linen-200: rgba(242, 233, 221, 0.05);
--color-linen-300: rgba(242, 233, 221, 0.1);
--color-white: #fff;
--color-seagreen: #126849;
--color-orangered: #db470b;
--color-green: #169d0d;

/* Gaps */
--gap-13xl: 32px;
--gap-5xs: 8px;
--gap-xs: 12px;
--gap-9xs: 4px;
--gap-5xl: 24px;
--gap-base: 16px;
--gap-81xl: 100px;

/* Paddings */
--padding-5xs: 8px;
--padding-5xl: 24px;
--padding-base: 16px;
--padding-xs: 12px;
--padding-29xl: 48px;
--padding-xl: 20px;
--padding-9xs: 4px;
--padding-21xl: 40px;
--padding-13xl: 32px;

/* Border radiuses */
--br-5xl: 24px;
--br-xl: 20px;
--br-7xs: 6px;
--br-9xs: 4px;
--br-81xl: 100px;
--br-84xl-5: 103.5px;
--br-sm: 14px;
--br-981xl: 1000px;

}
`;

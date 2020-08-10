/* TypeScript file generated from Banner.re by genType. */
/* eslint-disable import/first */


const $$toRE364070043: { [key: string]: any } = {"Info": 0, "Success": 1, "Warning": 2, "Danger": 3};

// tslint:disable-next-line:no-var-requires
const Curry = require('bs-platform/lib/es6/curry.js');

// tslint:disable-next-line:no-var-requires
const BannerBS = require('./Banner.bs');

// tslint:disable-next-line:interface-over-type-literal
export type bannerTypes = "Info" | "Success" | "Warning" | "Danger";

export const make: (_1:{
  readonly title: string; 
  readonly message: string; 
  readonly bannerType: bannerTypes
}) => JSX.Element = function (Arg1: any) {
  const result = Curry._3(BannerBS.make, Arg1.title, Arg1.message, $$toRE364070043[Arg1.bannerType]);
  return result
};

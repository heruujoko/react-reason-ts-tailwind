/* TypeScript file generated from Banner.re by genType. */
/* eslint-disable import/first */


// tslint:disable-next-line:no-var-requires
const Curry = require('bs-platform/lib/es6/curry.js');

// tslint:disable-next-line:no-var-requires
const BannerBS = require('./Banner.bs');

export const make: (_1:{ readonly title: string; readonly message: string }) => JSX.Element = function (Arg1: any) {
  const result = Curry._2(BannerBS.make, Arg1.title, Arg1.message);
  return result
};

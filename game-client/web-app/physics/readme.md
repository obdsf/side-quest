# Physics

Physics engines compatible with Babylon.js live here.

## [Ammo.js](https://github.com/kripken/ammo.js)

Best physics engine for babylon?

### Installation Instructions

-   Download the [ammo.js](https://github.com/kripken/ammo.js/blob/main/builds/ammo.js) file (the one from github that's linked, don't use the CDN).
-   Rename it to `index.js` and put it in a folder that follows the naming convention `ammo-DDMMYY`.
-   Alongside it add the [ammo.d.ts](https://github.com/giniedp/ammojs-typed/blob/master/ammo/ammo.d.ts) declaration file, renamed to `index.d.ts`.
-   Finally make the following changes to `index.js` as described in [this answer](https://discourse.threejs.org/t/how-to-convert-ammo-js-to-es6-module/30633):
    1. Towards the end of the file, find the command `this.Ammo=b;` and remove it completely.
    2. At the end of the file, add the command `export default Ammo;`;

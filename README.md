Yet another React Boilerplate
=============================

Features
--------
 - Atomic component structure
 - Webpack 2, with dev server (see notes below)
 - Jest
 - Babel
 - React
 
Commands
--------

 -  ` npm test ` runs all tests
 -  ` npm run watch ` watches for component changes
 -  ` npm run build ` builds a (suboptimal) /dist
 -  ` npm start ` serves the app on local port 8080

Notes
-----

I have encountered [a bug with webpack-dev-server](https://github.com/webpack/webpack-dev-server/issues/997). 
The fix is about to be published but it's not there yet. If you ran into it too, 
while the official fix is published, a quick fix is /utils/bin.


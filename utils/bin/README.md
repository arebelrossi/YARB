webpack-dev-server needs to be linked in node_modules until this bug is fixed:
https://github.com/webpack/webpack-dev-server/issues/997#issuecomment-316117605

Until then, after install symlink this file into

`node_modules/webpack-dev-server/bin/webpack-dev-server.js`

Bugfix is said to be on its way.

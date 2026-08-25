const fs = require('fs');
const path = require('path');

const demosRoot = path.resolve(__dirname, '..', 'demos');
const homepage = require('../package.json').homepage;
const publicPath = new URL(homepage, 'http://localhost').pathname.replace(/\/$/, '');

function serveDemos(req, res, next) {
  const resolved = path.resolve(demosRoot, req.path.replace(/^\//, ''));
  if (resolved !== demosRoot && !resolved.startsWith(demosRoot + path.sep)) {
    res.status(403).end();
    return;
  }

  fs.stat(resolved, (err, stats) => {
    if (err || !stats.isFile()) {
      next();
      return;
    }
    res.sendFile(resolved);
  });
}

module.exports = function (app) {
  const mounts = new Set(['/demos']);
  if (publicPath && publicPath !== '/') {
    mounts.add(`${publicPath}/demos`);
  }
  mounts.forEach((mount) => app.use(mount, serveDemos));
};

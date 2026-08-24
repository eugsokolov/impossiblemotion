const fs = require('fs');
const path = require('path');

const demosRoot = path.resolve(__dirname, '..', 'demos');

module.exports = function (app) {
  app.use('/demos', (req, res, next) => {
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
  });
};

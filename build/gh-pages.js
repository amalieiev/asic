var ghpages = require('gh-pages');
var path = require('path');

ghpages.publish('dist', function (err) {
    if (err) throw err
});

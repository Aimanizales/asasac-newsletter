const watch = require('node-watch');
const reloadServer = require('reload');

watch('asasac_newsletter.html', { recursive: true }, function(evt, name) {
    console.log('%s changed.', name);
    reloadServer.reload();
});
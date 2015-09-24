var exec = require('child_process').exec;

exports.handler = function(event, context) {
    console.log('Received event:', JSON.stringify(event, null, 2));

    exec('./bin/gdalinfo /vsicurl/https://s3.amazonaws.com/raster-foundry-tmp/356f564e3a0dc9d15553c17cf4583f21-5.tif', function(error, stdout) {
        console.log(stdout);
        context.done(error, stdout);
    });
};

      var connect = require('connect'),
      serve = require('serve-static');


      var app = connect();

      app.use(serve(__dirname));

      app.listen(8080);

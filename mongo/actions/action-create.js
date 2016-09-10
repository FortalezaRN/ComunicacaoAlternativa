'use strict';
const querystring = require('querystring');
module.exports = (Users) => {
  return (req, res) => {
    let queryData = '';
    console.log(req.data);
    // req.on('data', (data) => {
    //   queryData += data;
    // });

      var body = '';

        req.on('data', function (data) {
            body += data;

            // Too much POST data, kill the connection!
            // 1e6 === 1 * Math.pow(10, 6) === 1 * 1000000 ~~~ 1MB
            if (body.length > 1e6)
                req.connection.destroy();
        });

        req.on('end', function () {
            var post = querystring.parse(body);

            console.log(post);
            // use post['blah'], etc.
        });

    // req.on('end', () => {
    //   const obj = querystring.parse(queryData);
    //   Users.create(obj, (err, data) => callback(err, data, res));
    // });
  };
};
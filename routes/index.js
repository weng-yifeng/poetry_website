var express = require('express');
var router = express.Router();
var app = express();

// 请求允许跨域
var allow_cross_domain = require('../middlewares/allowCrossDomain').allowCrossDomain;
router.use(allow_cross_domain);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/test_info', function(req, res, next) {

    var info = req.query;
    console.log("req.body:",info);
    var people = [];
    var name = info.name;
    if (!name) {
      people = [
        {
          "name": "kidceg",
          "word": "hello kidceg"
        },
        {
          "name": "hackett",
          "word": "hello hackett"
        },
      ]
    } else {
      people = [
        {
          "name": name,
          "word": "hello " + name
        }
      ]
    }

    res.json({
      data: people,
      code: 0
    });
});

module.exports = router;

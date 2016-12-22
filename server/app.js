var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
let fs = require('fs');

var routes = require('./routes/route_app');

var app = express();
var ejs = require('ejs');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.engine('.html', ejs.__express);
app.set('view engine', 'html');// app.set('view engine', 'ejs');


// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'favicon', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/app', routes.index);  
app.get(/\/movie\/hot\//, routes.hot);
app.get(/\/movie\/cinema\//, routes.cinema);
app.get(/\/movie\/info\//, routes.info);
app.get(/\/movie\/evaluation\//, routes.evaluation);
app.get(/\/movie\/coming\//, routes.coming);
app.get(/\/movie\/coming\/[\w\W]*/, routes.comingLimit);

app.get('/movie/swiper', routes.swiper);
app.get('/movie/city', routes.city);
app.get('/movie/cinema_detail', routes.cinema_detail);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

//发布文件时自动替换一些路径处理
let dealIndexTemplate = {
  changeNum: -1,
  directory: './views/',
  fileDirectory: './views/index.html',
  reg: /(\/..\/public)/g,
  dealContent: '',
  init: function() {
    fs.watch(this.directory, {
        persistent: true, // 设为false时，不会阻塞进程。
        recursive: false
    }, (event, filename) => {
      ++this.changeNum;
      if (this.changeNum % 2) {
        return false;
      }

      let indexStr = fs.readFileSync(this.fileDirectory, 'utf-8');
      indexStr = indexStr.replace(this.reg, (result, rq) => {
        return this.dealContent;
      })
      fs.writeFile(this.fileDirectory, indexStr, (err) => {
        if(err) {
          console.log("fail " + err);
        }
        else {
          console.log("write success!");
        }
      });
    });
  }
}

let dealCssFile = {
  changeNum: -1,
  directory: './public/stylesheets/',
  reg: /(\/..\/public)/g,
  dealContent: '',
  init: function() {
    fs.watch(this.directory, {
        persistent: true, // 设为false时，不会阻塞进程。
        recursive: false
    }, (event, filename) => {
      if (/\.css$/.test(filename)) {
        let cssStr = fs.readFileSync(this.directory + filename, 'utf-8');
        if (!cssStr) {
          return false
        }
        ++this.changeNum;
        if (this.changeNum % 2) {
          return false;
        }
        cssStr = cssStr.replace(this.reg, (result, rq) => {
          return this.dealContent;
        })
        fs.writeFile(this.directory + filename, cssStr, (err) => {
          if(err) {
            console.log("fail " + err)
          }
          else {
            console.log("write success!");
          }
        });
      }
    });
  }
}

// dealIndexTemplate.init();
// dealCssFile.init();

module.exports = app;

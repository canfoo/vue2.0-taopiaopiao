let url = require('url');  
let dealFn = require('./dealfn.js');

function sendDataFn(req, res, filename, needcity) {
    let query = url.parse(req.url, true).query,
        name = query.name || '',
        city = query.city,
        readFileName = '',
        sendData = {
            errno: 0,
            city: city,
            msg: 'ok',
            data: {}
        };
    if (needcity) {
        readFileName = city + filename;
    } else {
        readFileName = filename;
    }
    dealFn.readFileData(name + readFileName).then((data) => {
        sendData.data = data;
        res.send(sendData);
    }, (msg) => {
        sendData.errno = -1;
        sendData.msg = '暂时没有数据';
        res.send(sendData);
    })
}

exports.index = (req, res) => {
    res.render('index');
}

exports.coming = (req, res, next) => {
    let query = url.parse(req.url, true).query,
        limit = query.limit,
        offset = query.offset;
    if (limit && offset) {
        next();
    } else {
        sendDataFn(req, res, 'coming.json', false);
    }
}

exports.comingLimit = (req, res) => {
    let query = url.parse(req.url, true).query,
        limit = +query.limit,
        offset = +query.offset,
        sendData = {
            errno: 0,
            total: 0,
            limit: limit,
            offset: offset,
            msg: 'ok',
            data: {}
        };
    dealFn.readFileData('coming.json').then((data) => {
        let list = data.data.returnValue
        let sendList = list.slice(offset, offset + limit)
        data.data.returnValue = sendList
        sendData.data = data;
        sendData.total = list.length
        res.send(sendData);
    }, (msg) => {
        sendData.errno = -1;
        sendData.msg = '暂时没有数据';
        res.send(sendData);
    })
}

exports.cinema = (req, res) => {
    sendDataFn(req, res, '_cinema.json', true);
}

exports.hot = (req, res) => {
    sendDataFn(req, res, '_hot.json', true);
}

exports.info = (req, res) => {
    sendDataFn(req, res, '_info.json', false);
}

exports.evaluation = (req, res) => {
    sendDataFn(req, res, '_evaluation.json', false);
}

exports.swiper = (req, res) => {
    sendDataFn(req, res, 'swiper.json', false);
}

exports.city = (req, res) => {
    sendDataFn(req, res, 'city.json', false);
}

exports.cinema_detail = (req, res) => {
    sendDataFn(req, res, 'cinema_detail.json', false);
}

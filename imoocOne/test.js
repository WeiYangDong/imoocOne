var User = require('./models/movie')

function insert() {
    var user = new User({
        doctor: '早村上树',
        title: '海啸与樱花',
        language: '日语',
        country: '日本',
        summary: '海啸与樱花',
        falsh: 'https://img3.doubanio.com/view/photo/l/public/p1422633165.webp',
        poster: 'https://img3.doubanio.com/view/photo/l/public/p1422633165.webp',
        year: 2006,
    });

    user.save(function(err, res) {
        if (err) {
            console.log("Error:" + err);
        } else {
            console.log("Res:" + res);
        }

    });
}

function find() {
    User.find({}, function(err, res) {
        if (err) {
            console.log("Error:" + err);
        } else {
            console.log("Res:" + res);
        }
    })
}


function updated() {
    var a = {
        _id: '5a05665b26667339303ab0e5',
        doctor: '早村上树',
        title: '海啸与樱花',
        language: '日语',
        country: '日本',
        summary: '海啸与樱花',
        falsh: 'https://img3.doubanio.com/view/photo/l/public/p1422633165.webp',
        poster: 'https://img3.doubanio.com/view/photo/l/public/p1422633165.webp',
        year: 2006,
    }
    var b = {
        doctor: '早村上树',
        title: '海啸与樱花',
        language: '日语',
        country: '日本',
        summary: '海啸与樱花',
        falsh: 'https://img.alicdn.com/tps/TB1EMhjIpXXXXaPXVXXXXXXXXXX.jpg_.webp',
        poster: 'https://img.alicdn.com/tps/TB1EMhjIpXXXXaPXVXXXXXXXXXX.jpg_.webp',
        year: 2006,
    }
    User.update(a, b, function(err, res) {
        if (err) {
            console.log("Error:" + err);
        } else {
            console.log("Res:" + res);
        }
    })
}
find();
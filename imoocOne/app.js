var express = require('express');
var mongoose = require('mongoose')
var Movie = require('./models/movie')
var port = process.env.port || 3000;
var path = require('path')
var app = express();
app.set('views', './views/pages');
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'bower_components')))
app.listen(port);

console.log('服务成功起来');

//index page
app.get('/', (req, res) => {
    Movie.find({}, function(err, doc) {
        if (err) {
            console.log(err, 1)
        }
        console.log(doc)
        res.render('index', { 'title': '首页', movies: doc })
    })
})

//list page
app.get('/list', (req, res) => {
    res.render('list', { 'title': 'list' })
})

//detail page 返回详情页
app.get('/movie/:id', (req, res) => {
    let id = req.params.id
    movies.findById(id, (err, movie) => {
        res.render('detail', { 'majing': movie.title, movie: movie })
    })

})


//admin page
app.get('/admin/movie', (req, res) => {
    res.render('admin', {
        'title': '后台录入页',
    })
})

//admin post movie
app.post('admin/movie/new', (req, res) => {
    var id = req.body.movie._id;
    var movieObj = req.body.movie;
    var _movie;
})
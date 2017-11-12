var mongoose = require('../db/db')
var MovieSchema = require('../schemas/movie')
var Movie = mongoose.model('Movie', MovieSchema)


module.exports = Movie
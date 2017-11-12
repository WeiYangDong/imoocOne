var mongoose = require('../db/db')
var MovieSchema = new mongoose.Schema({
    doctor: { type: String },
    title: { type: String },
    language: { type: String },
    country: { type: String },
    summary: { type: String },
    falsh: { type: String },
    poster: { type: String },
    year: { type: Number },
    // meta: {
    //     createAt: {
    //         type: Date,
    //         default: Date.now()
    //     },
    //     updateAt: {
    //         type: Date,
    //         default: Date.now()
    //     },
    // }
});

/**
 * pre save 是说每次插入数据库之前都会做的操作
 */
// MovieSchema.pre('save', (next) => {
//         if (this.isNew) {
//             this.meta.createAt = this.meta.updateAt;
//         } else {
//             this.meta.updateAt = Date.now()
//         }
//         next()
//     })
//模型一些静态方法
// MovieSchema.statics = {
//     fetch: function(cb) {
//         return this.find({}).sort('meta.updateAt')
//         exec(cb)
//     },
//     findById: function(id, cb) {
//         return this
//             .findOne({ _id: id })
//         exec(cb)
//     },
// }

module.exports = MovieSchema;
let mongoose = require('mongoose');

// define the schema for our user model
let Schema = mongoose.Schema;

let postSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref : 'User'},
    title: String,
    description: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Post', postSchema);

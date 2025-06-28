const mongoose = require('mongoose');

const articleSchema = mongoose.Schema({

    title:{
        type:String,
        required:[true,'Article title is required']
    },
    body:{
        type:String,
        required:[true,'Article body is required']
    }
},
{
    timestamps: true
}
); 
  

module.exports = mongoose.model('Article', articleSchema);
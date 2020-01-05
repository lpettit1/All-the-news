var mongoose = require("mongoose");


var Schema = mongoose.Schema;


var ArticleSchema = new Schema({

  headline: {
    type: String,
    unique: true
    // ,
    // required: true
  },
  
  summary: {
    type: String
    
  },
  url: {
    type: String
    // ,
    // required: true
  },

  isSaved: {
    type: Boolean,
    default: false
  },

  
  note: {
    type: Schema.Types.ObjectId,
    ref: "Note"
  }
});


var Article = mongoose.model("Article", ArticleSchema);


module.exports = Article;
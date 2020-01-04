var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;


var ArticleSchema = new Schema({
  // `headline
  headline: {
    type: String,
    unique: true
    // ,
    // required: true
  },
  // `summary
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
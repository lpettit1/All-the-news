var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Articleschema = new Schema({

    title: {
        type: String,
        required: true,
    },

    link: {
        type: String,
        required: true,
    },

    summery: {
        type: String,
        default: "Summary unavailable."
    },

    img: {
        type: String,
        //default: "/assets/images/unavailable.jpg"
    },

    issaved: {
        type: Boolean,
        default: false
    },

    status: {
        type: String,
        default: "Save Article"
    },

    created: {
        type: Data,
        default: Data.now
    },

    note: {
        type: Schema.Types.ObjectId,
        ref: "Note"
    }


});

Articleschema.index({title: "text"});

var Article = mongoose.model("Article", Articleschema);
module.exports = Article;
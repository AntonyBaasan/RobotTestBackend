var mongoose = require('mongoose');

var rpcommentSchema = mongoose.Schema({
    user: {type:String, required:'{PATH} is required'},
    text: {type:String , required:'{PATH} is required'},
    published: {type:Date, required:'{PATH} is required'}
});

    
//Creating model by Schema
var Rpcomment = mongoose.model('rpcomment', rpcommentSchema);
    
function createDefaultComments(){
    Rpcomment.find({}).exec(function(err, collection){

        console.log('createDefaultComments() -- collection.length:'+collection.length);

        if (collection.length === 0) {
            console.log('createDefaultComments() -- create');
            Rpcomment.create({user: "Antony", text: "blalallala", published: "1/12/2012"});
        }
    });
}

exports.createDefaultComments = createDefaultComments;

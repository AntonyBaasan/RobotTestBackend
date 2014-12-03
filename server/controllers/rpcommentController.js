var Rpcomment = require('mongoose').model('rpcomment');


//Get all RPComments
exports.getAll = function(req, res)
{ 
    
     console.log("rpcommentController GET All !!!");
     
    Rpcomment.find({}).exec(function(err, collection) {
        res.send(collection);
    })
}

//Create a RPComment
exports.create= function(req, res)
{ 
    console.log("rpcommentController POST received!!!");
    
    var commentData = req.body;

    Rpcomment.create(commentData, function(err, user) {
        if(err) {
          if(err.toString().indexOf('E11000') > -1) {
            err = new Error('Duplicate Username');
          }

          res.status(400);
        }
    })
  
    res.send(req.body);
}

//Method used for development Save "prcomment" data into MongoDB
exports.save_test = function(req, res)
{
    console.log("rpcommentController GET !!!");

    var commentData = {
        user:req.params.user,
        text:req.params.text,
        published: new Date()
    }

    Rpcomment.create(commentData, function(err, message) {
        if(err) {
            if(err.toString().indexOf('E11000') > -1) {
                err = new Error('Duplicate Username');
            }
            res.status(400);
            return res.send({reason:err.toString()});
        }
    })


    res.sendStatus(200);
}

var rpcommentController = require('../controllers/rpcommentController')

module.exports = function(app){
   
// ----- API request handlers (start)
    //for API message
    app.get('/api/rpcomment/:user/:text', rpcommentController.save_test);
    app.get('/api/rpcomment', rpcommentController.getAll);
    app.post('/api/rpcomment', rpcommentController.create);

    //for partial views (for Angular)
    app.get('/partials/*', function(req, res){
        res.render('../../public/app/' + req.params[0]);
    });

    //if Api is unknown, the return 404 (otherwise we get default page)
    app.all('/api/*', function(req,res){
        console.log("route not found!!!");
        res.send(404);
    })

    //set default route. Because SPA we need only one route.
    app.get('*', function(req, res){
        console.log("route '*'!!!");
        res.render('index');
    });
}
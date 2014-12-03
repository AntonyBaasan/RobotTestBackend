angular.module('app').controller('angMainCtrl', function($scope, angRpcommentResource){

    $scope.comments = angRpcommentResource.query();
    //API call
    /*
    angRpcommentResource.get({}, function(comments){
        if(genNumber.statusCode == 403)
            $scope.error = genNumber.reason;

        $scope.comments = comments;
        
    }, function(error){
        $scope.error = error.data.reason;
    });
    */
});
angular.module('app').factory('angRpcommentResource', function($resource){
    var GeneratorResource = $resource('/api/rpcomment'
        //,{get: {method:'GET',isArray:true}}
    );

    return GeneratorResource;
});
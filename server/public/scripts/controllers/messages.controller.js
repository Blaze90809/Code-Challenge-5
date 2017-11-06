myApp.controller('MessageController', function($http){
    console.log('MessageController created');

    var vl= this;
    vl.return=[];

    vl.postMessages = function(message){
        console.log(message);
        $http.post('/add', message).then(function(response){
            console.log('success!');
            vl.refreshMessages();
        }).catch(function(error){
            console.log('Error!', error)
        })
    }//End of Post route

    vl.refreshMessages = function(){
        console.log('gettingMesages')
        $http.get('/add').then(function(response){
            console.log(response.data)
            vl.return = response.data;
        }).catch(function(error){
            console.log('Error!', error)
        })
    }
    vl.refreshMessages();
})
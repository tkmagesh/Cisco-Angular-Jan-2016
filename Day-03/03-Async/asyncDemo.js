/* Sync */
function addSync(x,y){
    console.log("[Provider] processing ", x , " and ", y);
    var result = x + y;
    console.log("[Provider] returning result");
    return result;
}

function addSyncClient(x,y){
    console.log("[Consumer] triggering add for ", x , " and ", y);
    var result = addSync(x,y);
    console.log("[Consumer] result = ", result);
}


/* Async - Callbacks*/
function addAsync(n1,n2, onResult){
    console.log("[Provider] processing ", n1 , " and ", n2);
    setTimeout(function(){
        var result = n1 + n2;
        console.log("[Provider] returning result");
        if (typeof onResult === 'function')
            onResult(result);
    }, 3000);
}

function addAsyncClient(x,y){
    console.log("[Consumer] triggering add for ", x , " and ", y);
    addAsync(x,y, function(result){
        console.log("[Consumer] result of adding " , x , " and " , y, " = ",  result);
    });
}


/* Async - Events */
var adder = (function(){
    var _callbacks = [];
    function onResult(callback){
        _callbacks.push(callback);
    }
    function addAsync(n1,n2){
        console.log("[Provider] processing ", n1 , " and ", n2);
        setTimeout(function(){
            var result = n1 + n2;
            console.log("[Provider] returning result");
            _callbacks.forEach(function(callbackFn){
                callbackFn(result);
            })
        }, 3000);
    }
    return {
        addAsync : addAsync,
        onResult : onResult
    };
})();

/* Async - Promises */
function addAsyncUsingPromise(n1, n2){
     console.log("[Provider] processing ", n1 , " and ", n2);
     var promise = new Promise(function(resolve, reject){
        setTimeout(function(){
            var result = n1 + n2;
            console.log("[Provider] returning result");
            resolve(result);
         }, 3000);
     });
     return promise;
}

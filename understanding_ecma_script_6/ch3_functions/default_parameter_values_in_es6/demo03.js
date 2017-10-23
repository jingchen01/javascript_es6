let makeRequest = (url, timeout = 2000, callback = function () {
}) => {
// the rest of the function
    console.log('url: ' + url);
    console.log('timeout: ' + timeout);
    console.log('callback: ' + callback);
};


makeRequest("/foo");

/*
In this case, the default value for timeout will be used only if there is no
second argument passed in or if the second argument is explicitly passed in
as undefined
 */
makeRequest("/foo", undefined);


/*

In the case of default parameter values, a value of null is considered
valid, meaning that in the third call to makeRequest(), the default value for
timeout will not be used.

 */

makeRequest("/foo", null, function (body) {
    doSomething(body);
});

/* Out:

url: /foo
timeout: 2000
callback: function () {
}
url: /foo
timeout: 2000
callback: function () {
}
url: /foo
timeout: null
callback: function (body) {
    doSomething(body);
}

 */
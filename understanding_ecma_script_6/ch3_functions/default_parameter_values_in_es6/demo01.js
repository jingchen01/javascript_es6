function makeRequest(url, timeout = 2000, callback = function () {
}) {
// the rest of the function
    console.log('url: ' + url);
    console.log('timeout: ' + timeout);
    console.log('callback: ' + callback);
}


// uses default timeout and callback
makeRequest("/foo");
// uses default callback
makeRequest("/foo", 500);
// doesn't use defaults
makeRequest("/foo", 500, function (body) {
    doSomething(body);
});

/* Out:

url: /foo
timeout: 2000
callback: function () {
}
url: /foo
timeout: 500
callback: function () {
}
url: /foo
timeout: 500
callback: function (body) {
    doSomething(body);
}

 */
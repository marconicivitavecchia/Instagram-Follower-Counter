function myCall() {
    console.log("interval timer...");
    $.getJSON("./data.json").done(myDone).fail(onFail);
}

function myDone(dataJson) {
    console.log(dataJson.follower);
}

function onFail(e){
    console.log(e);
}

function myInit() {
    console.log("OK!");
    setInterval(myCall, 1000);
    

}

$(document).init(myInit);

function myCall() {
    console.log("interval timer...");
    $.getJSON("./data.json").done(myDone);
    //setInterval(myCall, 1000);
}

function myDone(dataJson) {
    console.log(dataJson.follower);
}
function myInit() {
    console.log("OK!");
    setInterval(myCall, 1000);
    

}

$(document).init(myInit);

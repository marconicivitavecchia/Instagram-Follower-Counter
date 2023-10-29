function myCall() { 
    console.log("interval timer...");
    $.getJSON("./data.json").done(myDone).fail(onFail);
}

function myDone(dataJson) {
    console.log(dataJson.follower);  //chiamiamo follower all'interno del file data.json, quindi stamperà 100 
}

function onFail(e){
    console.log(e);       //nel caso di errore, verrà stampato 
}   

function myInit() {
    console.log("OK!");
    setInterval(myCall, 1000);  //chiama la funzione myCall ogni 1000ms
}

$(document).init(myInit);

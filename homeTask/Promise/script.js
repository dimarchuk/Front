function delay(ms) {
    let rezult = new Promise(function (resolve, reject) {
        setTimeout(function () {
                resolve(true);
        }, ms);
    });

    return rezult;
}

function doStuff() {
    console.log("Я появлюсь через 2 секунды");
}

delay(2000).then(doStuff);
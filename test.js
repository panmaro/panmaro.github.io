function start() {
}
function getBusStop(busstop) {
    return new Promise(function (resolve, reject) {
        fetch("http://zgora.trapeze.fi/vm/main?command=fs&stop=" + busstop, {
            method: "GET",
            mode: "cors",
            cache: "no-cache",
            credentials: "include"
        })
            .then(function (res) { return res.text(); })
            .then(function (text) {
            var el = document.createElement("div");
            el.addEventListener("DOMNodeInserted", function (event) {
                resolve(Array.from(el.querySelectorAll("table#departures-table td")));
            });
            el.innerHTML = text;
        })["catch"](function (err) { return reject(err); });
    });
}
//# sourceMappingURL=test.js.map
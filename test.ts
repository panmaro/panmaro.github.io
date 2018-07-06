function start( ):void {

}

function getBusStop(busstop:number):Promise<any> {

    return new Promise((resolve, reject)=> {
        fetch("http://zgora.trapeze.fi/vm/main?command=fs&stop=" + busstop,
            {
                method: "GET",
                mode: "cors", // no-cors, cors, *same-origin
                cache: "no-cache",
                credentials: "include", // include, same-origin, *omit
            })
        .then((res)=>res.text())
        .then((text)=>{
            let el = document.createElement("div");
            el.addEventListener("DOMNodeInserted", (event) => {
                resolve(Array.from(el.querySelectorAll("table#departures-table td")));
            });

            el.innerHTML = text;

        })
        .catch((err)=>reject(err));
    });
}


importScripts([
    'Work.js'
])

var workDispatch = new Work();

onmessage = function(e) {
    let data = e.data;

    switch (data.msg) {
        case 1:
            workDispatch.setOptions(data);
            break;
        default:
            workDispatch.invoke(data);
            break;
    }
}

postMessage({
    msg: 0,
    info: 'Hello I am alive'
})
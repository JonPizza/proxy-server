url = document.getElementById('url');
connect = document.getElementById('connect');
click = document.getElementById('click');
frame = document.getElementById('frame_a');

click.onclick = updateUrl; 
connect.onclick = loadHTML;

function updateUrl() {
    connect.innerHTML('Connect to: ' + url.value);
}
//------- API
function loadHTML() {
    var request = new XMLHttpRequest()
    request.open('GET', url.value, true)
    request.onload = function() {
        // Begin accessing JSON data here
        var data = JSON.parse(this.response)
        if (request.status >= 200 && request.status < 400) {
            frame.innerHTML = data;
        } else {
            console.log('bu hao')
        }
    }
    request.send()
}


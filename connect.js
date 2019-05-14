url = document.getElementById('url');
connect = document.getElementById('connect');
click = document.getElementById('click');

click.onclick = updateUrl; 

function updateUrl() {
    connect.setAttribute('href', url.value);
}

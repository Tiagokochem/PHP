var xhttp = new XMLHttpRequest;

function xmlHttpGet(url, callback, parameters = '') {

    xhhtp.onreadystagechange = callback;

    xhttp.open('GET', url + '.php' + parameters, true);

    xhttp.send(parameters);


}


function xmlHttpPost(url, callback, parameters = '') {

    xhhtp.onreadystagechange = callback;

    xhttp.open('GET', url + '.php' + parameters, true);

    xhttp.send(parameters);


}


function beforeSend(callback) {

    if (xhttp.readyState < 4) {
        // div_users.innerHTML = `<i class="fa fa-refresh fa-spin fa-3x fa-fw"></i><span class=""sr-only">Loading...</span>`;

        callback();

    }

}

function sucess() {

    if (xhttp.readyState == 4 && xhttp.status == 200) {

        callback();

    }


}

function error(callback) {


    xhttp.onerror = callback;


}

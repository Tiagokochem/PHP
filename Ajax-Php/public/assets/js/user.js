// $(document).ready(function()) = (window.onload = function)



window.onload = function () {

    var btn_users = document.querySelector("#btn-users");

    var xhttp = new XMLHttpRequest();

    // console.log(xhttp);

    btn_users.onclick = function () {

        // console.log('teste');

        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {

                console.log(this.responseText);
            }
        }

        xhttp.open('GET', 'ajax/user.php', true);

        xhttp.send();

    }


}
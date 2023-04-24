// $(document).ready(function()) = (window.onload = function)



window.onload = function () {

    var btn_users = document.querySelector("#btn-users");

    var div_users = document.querySelector("#div_users");

    var xhttp = new XMLHttpRequest();

    // console.log(xhttp);

    btn_users.onclick = function () {

        // console.log('teste');

        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {

                var users = JSON.parse(this.responseText);

                // console.log(users);

                var table = `<class='table table striped'>`;
                table += `<thead><tr><td>ID</td><td>Nome</td><td>Email</td></tr></thead>`;

                table += `<tbody>`;

                users.array.forEach(function (user) {

                    table += `<tr>`;

                    table += `<td>${user.id}</td>`;

                    table += `<td>${user.name}</td>`;

                    table += `<td>${user.email}</td>`;

                    table += `</tr>`;

                });

                table += `</tbody>`;

                table += `</table>`;

                div_users.innerHTML = table;
            }
        }

        xhttp.open('GET', 'ajax/user.php', true);

        xhttp.send();

    }


}
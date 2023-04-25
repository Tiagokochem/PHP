s// $(document).ready(function()) = (window.onload = function)



window.onload = function () {

    var btn_users = document.querySelector("#btn-users");

    var div_users = document.querySelector("#div_users");


    // console.log(xhttp);

    btn_users.onclick = function () {

        // console.log('teste');
        xmlHttpGet('ajax/user', function(){

            beforeSend(function(){

                div_users.innerHTML = `<i class="fa fa-refresh fa-spin fa-3x fa-fw"></i><span class="sr-only">Loading...</span>`;

            });

            sucess(function(){

                console.log(JSON_parse(xhttp.responseText));
               
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

            });

            error(function(){

                div_users.innerHTML = 'Ocorreu um erro';


            });

        }, '?id=1');

    }

}
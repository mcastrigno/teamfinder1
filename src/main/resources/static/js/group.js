const getUserInfo = function() {
    $.ajax({
        type: "GET",
        url: "/user/info",
    }).then(function(response) {
        console.log("response: ",response);
        let header = document.getElementById("welcome-user");
        header.innerText = "Welcome, " + response;
    });
};

const writeAvailTable = function() {
    let table = '';
    let rows = 8;
    let cols = 8;
    for (let r = 0; r < rows; r++) {
        table += '<tr>';
        for (let c = 0; c < cols; c++) {
            if (c == 0) {
                table += '<td class="dCell">' + r + '</td>';
            } else {
                table += '<td class="aCell">' + c + '</td>';
            }
        }
        table += '</tr>';
    }
    document.write('<table class="table table-bordered">' + table + '</table>');
};
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

const writeAvailTable = function(num) {
    let table = '';
    let rows = 8;
    let cols = 8;
    for (let r = 0; r < rows; r++) {
        table += '<tr>';
        for (let c = 0; c < cols; c++) {
            if (c == 0) {
                let time = r+8;
                if (time == 12) {
                    time = "Noon"
                } else {
                    time = time > 12 ? (time%12) + " pm": time + " am";
                }
                table += '<td class="dCell">' + time + '</td>';
            } else {
                let id = (r*8)+c;
                let color;
                if (num==1) {
                    color = (c%2) && (r>1 && r<4) ? "green": "red";
                } else if (num==2) {
                    color = ((c%2==0) && (r%4<2)) ? "green": "red";
                } else if (num==3) {
                    color = "red";
                }
                table += '<td id="'+id+'" class="aCell '+color+'"></td>';
            }
        }
        table += '</tr>';
    }
    document.write('<table class="table table-bordered">' + table + '</table>');
};

const switchTable = function() {
    let show = document.getElementById("group-select").value;
    let groups = ["group1","group2","group3"];
    let table;
    groups.forEach(function(group) {
        table = document.getElementById(group);
        if (group == show) {
            table.style.display = "block";
        } else {
            table.style.display = "none";
        }
    })
};
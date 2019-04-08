const getUserInfo = function() {
    $.ajax({
        type: "GET",
        url: "/user/info",
    }).then(function(response) {
        let header = document.getElementById("welcome-user");
        header.innerText = "Welcome, " + response;
    });
};

const makeTables = function() {
    let groups = ["group1","group2","group3"];
    let headers = ["Time","Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
    let table;
    let td;
    let row;

    groups.forEach(function(group) {
        table = document.getElementById(group);
        let th = document.createElement("tr");
        for(let i = 0; i < 8; i++) {
            td = document.createElement("td");
            td.innerText = headers[i];
            if (i == 0) {
                td.classList.add("dCell");
            } else {
                td.classList.add("aCell");
            }
            th.appendChild(td);
        }
        table.appendChild(th);
        let rows = 8;
        let cols = 8;
        for (let r = 0; r < rows; r++) {
            row = document.createElement("tr");
            for (let c = 0; c < cols; c++) {
                td = document.createElement("td");
                if (c == 0) {
                    let time = r+8;
                    if (time == 12) {
                        time = "Noon"
                    } else {
                        time = time > 12 ? (time%12) + "pm": time + "am";
                    }
                    td.innerText = time;
                    td.classList.add("dCell");
                } else {
                    let id = (r*8)+c;
                    let color;
                    if (group=='group1') {
                        color = (c%2) && (r>1 && r<4) ? "green": "red";
                    } else if (group=='group2') {
                        color = ((c%2==0) && (r%4<2)) ? "green": "red";
                    } else if (group=='group3') {
                        color = "red";
                    }
                    td.classList.add("aCell",color);
                    td.id = id;
                }
                row.appendChild(td);
            }
            table.appendChild(row);
        }
    })
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
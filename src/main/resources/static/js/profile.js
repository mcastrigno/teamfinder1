const buildTable = function() {
    let headers = ["Time","Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
    let table;
    let td;
    let row;

    table = document.getElementById("table");
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
                let color = ((c%2==0) && (r%4<2)) || ((c%2) && (r>1 && r<5)) ? "green": "red";
                td.classList.add("aCell",color);
                td.id = id;
                td.onclick = function() {toggleColor(id);}
            }
            row.appendChild(td);
        }
        table.appendChild(row);
    }
};

const toggleColor = function(id) {
    let td = document.getElementById(id);
    if (td.classList.contains("green")) {
        td.classList.replace("green", "red");
    } else {
        td.classList.replace("red", "green");
    }
};
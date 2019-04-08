const writeAvailTable = function() {
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
               let color = ((c%2==0) && (r%4<2)) || ((c%2) && (r>1 && r<5)) ? "green": "red";
               table += '<td id="'+id+'" class="aCell '+color+'" onclick="toggleColor('+id+')"></td>';
           }
       }
       table += '</tr>';
   }
   document.write('<table class="table table-bordered">' + table + '</table>');
};

const toggleColor = function(id) {
    let td = document.getElementById(id);
    if (td.classList.contains("green")) {
        td.classList.replace("green", "red");
    } else {
        td.classList.replace("red", "green");
    }
};
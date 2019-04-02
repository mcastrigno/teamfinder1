   function writeAvailTable() {
       var table = '';
       var rows = 8;
       var cols = 8;
       for (var r = 0; r < rows; r++) {
           table += '<tr>';
           for (var c = 0; c < cols; c++) {
               if (c == 0) {
                   table += '<td class="dCell">' + r + '</td>';
               } else {
                   table += '<td class="aCell">' + c + '</td>';
               }
           }
           table += '</tr>';
       }
       document.write('<table class="table table-bordered">' + table + '</table>');
   }
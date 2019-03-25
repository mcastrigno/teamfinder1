const makeTable = function() {
    let today = new Date();
    //build dateString yyyy-MM-dd
    let dateString = today.getFullYear() + "-";
    if (today.getMonth() < 10) {
        dateString += "0" + today.getMonth() + "-";
    } else {
        dateString += today.getMonth() + "-";
    }
    dateString += "01";
    $.ajax({
        type: "GET",
        url: "/entry/getAllAfter?dateString=" + dateString,
    }).then(function(response) {
        let table = document.getElementById("resultTable");
        response.forEach(function(entry) {
            let row = document.createElement("tr");
            let category = document.createElement("td");
            category.innerText = entry.category;
            row.appendChild(category);
            let subCategory = document.createElement("td");
            subCategory.innerText = entry.subcategory;
            row.appendChild(subCategory);
            let duration = document.createElement("td");
            duration.innerText = entry.duration + " min";
            row.appendChild(duration);
            let date = document.createElement("td");
            date.innerText = entry.day.substring(0,10);
            row.appendChild(date);
            table.appendChild(row);
        })
    });
};
var category;
var subCategory;
var date;
var duration;
const setCategory = function(value) {
    let hide = document.getElementById("four-buttons");
    hide.style.display = "none";
    category = value;
    let show;
    switch (value) {
        case "Direct Services":
            show = document.getElementById("directServices");
            break;
        case "Indirect Services":
            show = document.getElementById("indirectServices");
            break;
        case "Responsive Services":
            show = document.getElementById("responsiveServices");
            break;
        case "Individual Planning":
            show = document.getElementById("individualPlanning");
            break;
    }
    show.style.display = "block";
};

const setSubCategory = function(value) {
    subCategory = value;
    let hide;
    switch (category) {
        case "Direct Services":
            hide = document.getElementById("directServices");
            break;
        case "Indirect Services":
            hide = document.getElementById("indirectServices");
            break;
        case "Responsive Services":
            hide = document.getElementById("responsiveServices");
            break;
        case "Individual Planning":
            hide = document.getElementById("individualPlanning");
            break;
    }
    hide.style.display = "none";
    let show = document.getElementById("date-time-div");
    show.style.display = "block";
};

const save = function() {
    let hide = document.getElementById("date-time-div");
    hide.style.display = "none";
    date = document.getElementById("datepicker").value;
    if(date) {
        date = new Date(date);
    } else {
        date = new Date();
    }
    duration = document.getElementById("duration").value;
    $.ajax({
        type: "POST",
        url: "/entry/save",
        data: {
            duration: duration,
            category: category,
            subCategory: subCategory,
            day: date
        }
    }).then(function(response) {
        let header = document.getElementById('results-header');
        header.innerText = response;
        let results = document.getElementById("results");
        results.style.display = "block";
    });
};

const changeDuration = function(change) {
    let duration = parseInt(document.getElementById("duration").value);
    if (duration + change > 0 && duration + change < 1000) {
        duration += change;
    }
    document.getElementById("duration").value = duration;
};

const cancel = function() {
    let hide = document.getElementById("date-time-div");
    hide.style.display = "none";
    let show = document.getElementById("four-buttons");
    show.style.display = "block";
};

const back = function(value) {
    subCategory = value;
    let hide;
    switch (category) {
        case "Direct Services":
            hide = document.getElementById("directServices");
            break;
        case "Indirect Services":
            hide = document.getElementById("indirectServices");
            break;
        case "Responsive Services":
            hide = document.getElementById("responsiveServices");
            break;
        case "Individual Planning":
            hide = document.getElementById("individualPlanning");
            break;
    }
    hide.style.display = "none";
    let show = document.getElementById("four-buttons");
    show.style.display = "block";
};
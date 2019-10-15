var d = new Date();
var oldMeal;
var oldDate;

var date =  `${String(d.getFullYear())}-${String(d.getMonth()+1)}-${String(d.getDate())}`;
var url = `https://dev-api.dimigo.in/dimibobs/${date}`;

function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false );
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

// if(oldDate == date) {
//     document.getElementById("breakfast").innerHTML = oldMeal.breakfast;
//     document.getElementById("lunch").innerHTML = oldMeal.lunch;
//     document.getElementById("dinner").innerHTML = oldMeal.dinner;
//     document.getElementById("date").innerHTML = date;    
// }

if(true) {
    var mealStr = httpGet(url);
    var meal = JSON.parse(mealStr);

    var breakfast = [], breakfastHTML = "";
    breakfast = meal.breakfast.split('/');
    for(menu in breakfast)
        breakfastHTML += `<li>${breakfast[menu]}</li>`;
    var lunch = [], lunchHTML = "";
    lunch = meal.lunch.split('/');
    for(menu in lunch)
        lunchHTML += `<li>${lunch[menu]}</li>`;
    var dinner = [], dinnerHTML = "";
    dinner = meal.dinner.split('/');
    for(menu in dinner)
        dinnerHTML += `<li>${dinner[menu]}</li>`;

    document.getElementById("breakfast").innerHTML = breakfastHTML;
    document.getElementById("lunch").innerHTML = lunchHTML;
    document.getElementById("dinner").innerHTML = dinnerHTML;
    document.getElementById("date").innerHTML = date;   

    oldDate = date;
    oldMeal = meal;
}

var zoomRate = 100;

function zoomIn() {
    var Page = document.getElementById('Body');
    var zoom = parseInt(Page.style.zoom) + 10 +'%'
    Page.style.zoom = zoom;

    var pageZoomRate = document.getElementById('zoomRate');
    zoomRate += 10;
    pageZoomRate.innerHTML = `${zoomRate}%`;

    return false;
}

function zoomOut() {
    var Page = document.getElementById('Body');
    var zoom = parseInt(Page.style.zoom) - 10 +'%'
    Page.style.zoom = zoom;

    var pageZoomRate = document.getElementById('zoomRate');
    zoomRate -= 10;
    pageZoomRate.innerHTML = `${zoomRate}%`;

    return false;
}

document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('zoomIn');
    // onClick's logic below:
    link.addEventListener('click', function() {
        zoomIn();
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('zoomOut');
    // onClick's logic below:
    link.addEventListener('click', function() {
        zoomOut();
    });
});
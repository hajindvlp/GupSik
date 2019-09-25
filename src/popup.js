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

if(oldDate == date) {
    document.getElementById("breakfast").innerHTML = oldMeal.breakfast;
    document.getElementById("lunch").innerHTML = oldMeal.lunch;
    document.getElementById("dinner").innerHTML = oldMeal.dinner;
    document.getElementById("date").innerHTML = date;    
}

else {
    var mealStr = httpGet(url);
    var meal = JSON.parse(mealStr);
    
    document.getElementById("breakfast").innerHTML = meal.breakfast;
    document.getElementById("lunch").innerHTML = meal.lunch;
    document.getElementById("dinner").innerHTML = meal.dinner;
    document.getElementById("date").innerHTML = date;   

    oldDate = date;
    oldMeal = meal;
}
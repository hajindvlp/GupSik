const httpGet = (endpoint) => {
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", endpoint, false );
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

const loadMeal = (date) => {
    let mealStr = httpGet(`https://dev-api.dimigo.in/dimibobs/${date}`);
    let meal = JSON.parse(mealStr);
    
    if(meal) {
        // let breakfast = [], breakfastHTML = "";
        // breakfast = meal.breakfast.split('/');
        // for(menu in breakfast)
        //     breakfastHTML += `<li>${breakfast[menu]}</li>`;
        // let lunch = [], lunchHTML = "";
        // lunch = meal.lunch.split('/');
        // for(menu in lunch)
        //     lunchHTML += `<li>${lunch[menu]}</li>`;
        // let dinner = [], dinnerHTML = "";
        // dinner = meal.dinner.split('/');
        // for(menu in dinner)
        //     dinnerHTML += `<li>${dinner[menu]}</li>`;
    
        document.getElementById("breakfast").innerHTML = meal.breakfast;
        document.getElementById("lunch").innerHTML = meal.lunch;
        document.getElementById("dinner").innerHTML = meal.dinner;
    } 
    document.getElementById("date").innerHTML = date;  
}

let zoomRate = 100;

const zoomIn = () => {
    let Page = document.getElementById('Body');
    let zoom = parseInt(Page.style.zoom) + 10 +'%'
    Page.style.zoom = zoom;

    let pageZoomRate = document.getElementById('zoomRate');
    zoomRate += 10;
    pageZoomRate.innerHTML = `${zoomRate}%`;

    return false;
}

const zoomOut = () => {
    let Page = document.getElementById('Body');
    let zoom = parseInt(Page.style.zoom) - 10 +'%'
    Page.style.zoom = zoom;

    let pageZoomRate = document.getElementById('zoomRate');
    zoomRate -= 10;
    pageZoomRate.innerHTML = `${zoomRate}%`;

    return false;
}

document.addEventListener("DOMContentLoaded", () => {
    let d = new Date();
    let date =  `${String(d.getFullYear())}-${String(d.getMonth()+1)}-${String(d.getDate())}`;
    loadMeal(date);

    document.getElementById('zoomOut').addEventListener('click', zoomOut);
    document.getElementById('zoomIn').addEventListener('click', zoomIn);
    document.getElementById('prevDate').addEventListener('click', () => {
        d.setDate(d.getDate() - 1); 
        let date =  `${String(d.getFullYear())}-${String(d.getMonth()+1)}-${String(d.getDate())}`;
        loadMeal(date);
    });
    
    document.getElementById('nextDate').addEventListener('click', () => {
        d.setDate(d.getDate() + 1); 
        let date =  `${String(d.getFullYear())}-${String(d.getMonth()+1)}-${String(d.getDate())}`;
        loadMeal(date);
    });
})
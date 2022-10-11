var APIkey = '87aaaece7dfcf81315da96f52ae53b3f'
const submitBtn = document.getElementById('submit');
const mamamia = document.getElementById('searchUser');
const weatherCard = document.getElementById('weatherContainer');

const getCurrent = (event) => {
    event.preventDefault()
    fetch(
        'https://api.openweathermap.org/data/2.5/weather?appid=' + APIkey + '&q=' + mamamia.value + '&units=imperial'
    ) .then(response => response.json())
        .then(data =>{
            console.log(data)
            // for(i=0;i<5;i++){
            //     document.getElementById('day' +(i+1)+'Min').innerHTML ='Min' +Number(data.list[i].main.temp_min -288.53);
            // }
            // for(i=0;i<5;i++){
            //     document.getElementById('day' +(i+1)+'Max').innerHTML ='Max' +Number(data.list[i].main.temp_max -288.53);
            // }
            // for(i=0;i<5;i++){
            //     document.getElementById('img' +(i+1)).src ="http://openweathermap.org/img/wn/" + data.list[i].weather[0].icon+".png";
            // }
        })
        .catch(err => console.log(err));
    }

const d =new Date();
const weekday =['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

function checkDay(day){
    if(day +d.getDay()-6){
        return day +d.getDay()-7;
    } else{
        return day +d.getDay();
    }
}

for(i=0;i<5;i++){
    document.getElementById('day'+(i+1)).innerHTML = weekday[checkDay(i)];
}
        

const weather = (data) => {
    console.log(data)
    document.createElement
}

function handleSearchSubmit(e) {
    if (!mamamia.value){
        return
    } e.preventDefault()
    var searchInput = mamamia.value.trim()
    fetchCoordinates(searchInput)
    mamaia.value = ''

}

function fetchWeather(searchLocation) {
    var {lat, lon, name} = searchLocation
    var apiurl =   'https://api.openweathermap.org/data/2.5/weather?appid=' + APIkey + '&q=' + mamamia.value + '&units=imperial'
    var apiForecast =   'https://api.openweathermap.org/data/2.5/forcast?appid=' + APIkey + '&q=lat' + lat + '&lon' + lon + '&units=imperial'
    fetch (apiurl)
    .then (function(res){
        return res.json()
    }) .then (function(data){
        displayCurrent(data)
    }) .then (function(){
        fetch (apiForecast)
        .then(function(res){
            return res.json()
        
        }) .then (function(data){
            displayForcast(data.list)
        })
    })
.catch (function(err){
    console.log(err)
})

function weatherDataDisplay() {
    // var  =function dayForecast(forecast){
    document.querySelector('.weekF').innerHTML=''
    for (let i = 8; i < forecast.list.length; i+=5) {
        console.log(forecast.list[i]);
        let div= document.createElement('div');
        div.setAttribute('class','dayF');
        let day= document.createElement('p');
        day.setAttribute('class','date')
        day.innerText= new Date(forecast.list[i].dt*1000).toDateString(undefined,'Asia/Kolkata');
        div.appendChild(day);

        let temp= document.createElement('p');
        temp.innerText= Math.floor((forecast.list[i].main.temp_max - 273))+ ' °F' + ' / ' + Math.floor((forecast.list[i].main.temp_min - 273))+ ' °F';
        div.appendChild(temp)

        let description= document.createElement('p');
        description.setAttribute('class','desc')
        description.innerText= forecast.list[i].weather[0].description;
        div.appendChild(description);
        document.querySelector('.weekF').appendChild(div)
};
// make two function: 1: display current and the other: display forcast

function fetchCoordinates(searchInput) {
    var apiurl = "https://api.openweathermap.org/geo/1.0/direct?appid=" + APIkey + '&q=' + searchInput + '&limit=1'
    fetch (apiurl)
    .then (function(res){
        return res.json()
    })
    .then (function(data){
        if (!data[0]){
            alert ('location not found')
        } else{
            console.log(data[0])
            fetchWeather(data[0])
        }
    })
}

submitBtn.addEventListener("click", (event) => getCurrent(event));
}}

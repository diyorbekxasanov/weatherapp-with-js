const api={
    key:"43e488b61071f5e653db512f9749178c",
    url:"https://api.openweathermap.org/data/2.5/"
}

const searchBox = document.querySelector(".search-box");
searchBox.addEventListener("keypress",setQuery)

function setQuery(e) {
    if(e.keyCode===13){
        getResult(searchBox.value)
        searchBox.value=``

        console.log(searchBox.value);
    }
}

function getResult(query) {
   fetch(`${api.url}weather?q=${query}&units=metric&appid=${api.key}`)
    .then((weather)=>{
        return weather.json()
    })
    .then(displayResults)
}

function displayResults(weather) {
    console.log(weather);
    let city = document.querySelector(".location .city")
    city.innerHTML=`${weather.name}, ${weather.sys.country}`

    let now = new Date()
    let date=document.querySelector(".location .date")
    date.innerHTML= dateBuilder(now)

    let temp = document.querySelector('.temp')
    temp.innerHTML=`${Math.round(weather.main.temp)}°C`

    let weatherEl = document.querySelector(".weather")
    weatherEl.innerHTML=weather.weather[0].main

    let hilow = document.querySelector(".hi-low")
    // let a=Math.floor((Math.random()*5)+1)
    hilow.innerHTML=`${Math.round(weather.main.temp_min)}°C / ${Math.round(weather.main.temp_max)}°C`
}

function dateBuilder(d) {
    let months=['Yanvar','Fevral','Mart','Aprel','May','Iyun','Iyul','Avgust','Sentabr','Oktabr','Noyabr','Dekabr']
    let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']

    let day = days[d.getDay()]     
    let date = d.getDate()
    let month = months[d.getMonth()]
    let year = d.getFullYear()
    
    return `${day} ${date} ${month} ${year}`
}





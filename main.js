


 f1 = () => {
     let input = document.querySelector('.i-1').value
fetch(`http://api.openweathermap.org/data/2.5/weather?q=${input}&appid=7de0f78d6679ed573f37076e1a70c70c`)
.then(function (resp){return resp.json()})
.then(function (data){
    console.log(data);
    document.querySelector('.package-name').textContent=data.name + ' ' + data.sys.country
    document.querySelector('.price').innerHTML =Math.round((data.main.temp - 273)) + '&deg' + `<img src="http://openweathermap.org/img/wn/${data.weather[0]['icon']}.png">`
    document.querySelector('.disclaimer').textContent=data.weather[0]['description']
    document.querySelector('.wind-speed').innerHTML = `Wind speed:${data.wind.speed} m/s `
    document.querySelector('.humidity').innerHTML = `Humidity: ${data.main.humidity} %(percents)`
    document.querySelector('.pressure').innerHTML = `Pressure: ${data.main.pressure} mmHg`

})
.catch(function (){
    //catch any errors
})
}

document.querySelector('.b-1').onclick = f1
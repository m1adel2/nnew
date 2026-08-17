function getweather() {
    const city = document.querySelector("#city").value;

    fetch(`http://api.weatherapi.com/v1/current.json?Apikey=9d8abe2274444bbf884162803261408=${city}`)
    .then(response => response.json())
    .then(data => {
        document.querySelector("#cityName").textContent = data.location.name;
        document.querySelector("#temp").textContent = data.current.temp_c + "°C";
        document.querySelector("#condition").textContent = data.current.condition.text;
    })
    .catch(error => {
        console.log(error);
    });
}
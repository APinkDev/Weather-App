const apiKey = "8d85ba91a993698d7fe98ee9ff231a92";

export default function fetchCityById(id, setData) {
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${apiKey}&units=metric`
  )
    .then((r) => r.json())
    .then((recurso) => {
      if (recurso.main !== undefined) {
        const ciudad = {
          min: Math.round(recurso.main.temp_min),
          max: Math.round(recurso.main.temp_max),
          img: recurso.weather[0].icon,
          id: recurso.id,
          wind: recurso.wind.speed,
          temp: recurso.main.temp,
          name: recurso.name,
          weather: recurso.weather[0].main,
          clouds: recurso.clouds.all,
          latitud: recurso.coord.lat,
          longitud: recurso.coord.lon,
        };
        setData(ciudad);
      } else {
        setData(null);
      }
    });
}

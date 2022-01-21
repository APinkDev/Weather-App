import React from "react";
import { Route } from "react-router-dom";
import styles from "./App.module.css";
import Nav from "./components/Nav";
import fetchCity from "./services/fetchCity.js";
import fetchCoords from "./services/fetchCoords.js";
import CitiesPage from "./Views/CitiesPage.js";
import CityDetail from "./Views/CityDetail.js";

function App() {
  const [data, setData] = React.useState([]);

  function onSearch(ciudad) {
    if (data.length > 2) {
      alert("No puedes agregar mas ciudades.");
    } else {
      fetchCity(ciudad, setData);
    }
  }

  function handleOnClose(id) {
    setData((prevData) => {
      // city es elemento de filter (array)
      return prevData.filter((city) => city.id !== id);
    });
  }

  React.useEffect(() => {
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition((pos) => {
        fetchCoords(pos.coords.latitude, pos.coords.longitude, setData);
      });
  }, []);

  return (
    <div className={styles.app}>
      <div className={styles.bkg} />
      <div className={styles.container}>
      
        <Route path="/" exact>
          <CitiesPage
            data={data}
            handleOnClose={handleOnClose}
            onSearch={onSearch}
          />
        </Route>

        <Route path="/" component={Nav}  />
        <Route 
          path="/city/:id"
          render={({ match, history }) => {
            //esto se vera en el checkpoint
            const id = parseInt(match.params.id);
            return <CityDetail id={id} onBack={history.goBack} />;
          }}
        />

        <Route path="/about">
          <h1 style={{ color: "white" }}>Howdy! its me, ApinkDev, this is my homework! ❤ </h1>
        </Route>
      </div>
    </div>
  );
}

export default App;

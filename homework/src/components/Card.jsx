import React from "react";
import styles from "./Card.module.css";
import { CgClose } from "react-icons/cg";
import {Link} from 'react-router-dom';

export default function Card(props) {
  const { max, min, name, img, onClose, primary, cityId } = props;
  return (
    <div className={`${styles.card} ${props.primary ? styles.primary : ""}`}>
    <div className={styles.name}>
    <Link className={styles.link} to={`/city/${cityId}`} >
        {name}
        </Link>
        {!primary && (
        <button className={styles.button} onClick={onClose}>
          <CgClose />
        </button>
        )}
    </div>
      
      
      <img
        src={`http://openweathermap.org/img/wn/${img}@2x.png`}
        alt="Climate_Icon"
      />
      <div className={styles.temps}>
        <Temp label="Min" temp={min} />
        <Temp label="Max" temp={max} />
      </div>
    </div>
  );
}

//mala practica, esto deberia ir en un archivo aparente
function Temp({ label, temp }) {
  return (
    <div className={styles.temp}>
      <span>{label}</span>
      <span>{temp}°</span>
    </div>
  );
}

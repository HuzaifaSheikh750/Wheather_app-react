import React, { useEffect, useState } from "react";
import "./css/style.css";
import { FaStreetView } from "react-icons/fa";
export const Tempapp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Karachi");

  useEffect(() => {
    const api_call = async () => {
      const url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=ba44e62c2f9ffc1eff474544594ca0ee`);
    //   const response = await fetch(url);
      const resJson = await url.json();
      console.log(resJson);
      setCity(resJson);

    };
    api_call();
  }, [search]);


  return (
    <>
      <div className="box">
        <div className="container">

          <input
            className="inputfield"
            type="text"
            placeholder="City"
            value={search}
            onChange={(e) => {
              setSearch(e .target.value);
            }}
          />
          {!city ? (
              
            <p>no data found</p>
            
                      ) : (
            <div className="box2">
              <FaStreetView />
              <h2 className="location">{search}</h2>
              <h1 className="temp">{city?.main?.temp} cel</h1>
              <h3 className="tempmin_max"> min : {city?.main?.temp_min} cel | max : {city?.main?.temp_max}  cel</h3>
            </div>
          )} 
        </div>
      </div>
    </>
  );
};

export default Tempapp;

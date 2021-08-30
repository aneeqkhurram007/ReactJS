import React, { useState, useEffect } from 'react'
import './Weather.css'
const Weather = () => {
    const [search, setsearch] = useState('lahore')
    const [temp, settemp] = useState({

    })
    const getWeather = async (event) => {

        console.log(search);
        try {
            let url =
                `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=8362d851b2c2fec17202d7f65fd5d529`

            const res = await fetch(url);
            const data = await res.json();

            const { temp, humidity, pressure } = data.main;
            const { main: weathermood } = data.weather[0]
            const { name } = data;
            const { speed } = data.wind;
            const { country, sunset } = data.sys

            const myNewWeatherInfo = {
                temp, humidity, pressure, weathermood, name, speed, country, sunset
            }
            settemp(myNewWeatherInfo);
            console.log(myNewWeatherInfo);
        } catch (error) {
            console.log(error);
        }

    }

    useEffect(() => {
        getWeather();
    }, [])

    const changeSearch = (event) => {
        setsearch(event.target.value)
    }
    return (
        <>
            <article id="container"
                className="container"

            >
                <header>
                    <h1>Weather Forecast</h1>
                </header>
                <div id="search" className="d-flex"
                >
                    <input id="searchInput" className="form-control" onChange={changeSearch} value={search} type="search" placeholder="City..." />
                    <button
                        id="searchButton"
                        className="btn btn-primary"
                        type="submit"
                        onClick={getWeather}
                    >
                        Search
                    </button>
                </div>
                <div id="imgContainer"

                >
                    <img alt="img" />
                </div>
                <div
                    id="info"
                    className="d-flex"

                >
                    <section
                        id="headingSection"
                        className="d-flex d-md-flex align-items-center align-items-md-center"

                    >
                        <h2 >{temp.temp} Celcius</h2>
                        <div>
                            <h4>{temp.weathermood}</h4>
                            <h4>{temp.name}{temp.country}</h4>
                        </div>
                    </section>
                    <section
                        className=" dateHead d-flex d-md-flex align-items-center align-items-md-center"

                    >
                        <h4>{new Date().toLocaleString()}</h4>
                    </section>
                </div>
                <div id="lastDiv"
                    className="d-flex align-items-center justify-content-sm-center"

                >
                    <section className="extraInfo" >
                        <img className="extraImg" alt="img" />
                        <h5>{temp.sunset}</h5>
                    </section>
                    <section className="extraInfo" >
                        <img className="extraImg" alt="img" />
                        <h5>{temp.humidity}</h5>
                    </section>
                    <section className="extraInfo" >
                        <img className="extraImg" alt="img" />
                        <h5>{temp.pressure}</h5>
                    </section>
                    <section className="extraInfo" >
                        <img className="extraImg" alt="img" />
                        <h5>{temp.speed}</h5>
                    </section>
                </div>
            </article>

        </>
    )
}

export default Weather

import React from 'react';
import { Router, Link, NavLink } from 'react-router-dom';
import './Home.css'

const Home = () => {
    return (
        <div className="app-description">
            <div className="text">
            This app was created for Shopify's Front-End Developer Intern Challenge. The application features images from NASA's <a href="https://apod.nasa.gov/apod/astropix.html">Astronomy Picture of the Day API</a>. You will be able to view 25 randomly selected images from the API, as well as get more information about each image such as the title, the explanation, and the date the image was taken.
            </div>
        </div>
    );
};

export default Home;
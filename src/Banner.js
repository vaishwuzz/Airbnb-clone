// Banner.js
import React, { useState } from 'react';
import './Banner.css';
import { Button } from "@material-ui/core";
import { Link } from 'react-router-dom';
import Search from './Search'; // Ensure correct path to the Search component

function Banner() {
    const [showSearch, setShowSearch] = useState(false);

    return (
        <div className='banner'>
            <div className='banner__search'>
                {showSearch && <Search />}

                <Button
                    onClick={() => setShowSearch(!showSearch)}
                    className='banner__searchButton'
                    variant='outlined'
                >
                    {showSearch ? "Hide" : "Search Dates"}
                </Button>
            </div>
            <div className='banner__info'>
                <h1>Get out and stretch your imagination</h1>
                <h5>
                    Plan a different kind of getaway to uncover the hidden gems near you.
                </h5>
                {/* Update the link to use the react-router-dom Link component */}
                <Link to='/search'>
                    <Button variant='outlined'>Explore Nearby</Button>
                </Link>
            </div>
        </div>
    )
}

export default Banner;

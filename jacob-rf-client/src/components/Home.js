import React, { Component } from 'react';
import homePage from '../images/homePage.jpg'
// import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import './Home.css';

class Home extends Component {
    render() {
        return(
            <div className="body-container">
                <div>
                    {/* <Image src={homePage} alt="" className="homePage-image" /> */}
                    <Image src={homePage} alt="Learning is never old" responsive rounded />
                </div>
                <p className="body-description" style={{lineHeight: 1.2}}>
                    Offering tutoring and education services for all ages in a variety of disciplines
                </p>
            
            {/* <Link to="/about">
                <Button bsStyle="primary">About</Button>
            </Link> */}
            </div>
        );
    }
}

export default Home
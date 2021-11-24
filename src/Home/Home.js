import './Home.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

class Home extends React.Component {
    handleClick = () =>{
      
    }
    render() {
        return (
            <div className="container">
                <div className="container-left">
                    <h1><span className="plant">Plants</span> make life better</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in.</p>
                    <div className="btn3">
                    <NavLink to="/Main"><button className="btn">Explore</button></NavLink>
                    </div>
                </div>
                <div className="container-right">
                    <img src="/plant.jpg" alt="plant"/>
                </div>
            </div>
        );
    }
}

export default Home;
import React from 'react';
import './styles.css';
import {Link} from 'react-router-dom'

const Main = () => {
    return (
        <div className="main">
            <div className="main__inner">
                <h1 className="main__title">Create your first event!</h1>
                <Link className="main__button" to={`/registration`}>Get started</Link>
            </div>
        </div>
    );
};

export default Main;
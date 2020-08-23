import React, { Component } from 'react';
import { render } from 'react-dom';

import { Cards } from './components';
import styles from './App.css';
import { fetchData } from './api';

import images from '../src/images/covid19.png';

class App extends Component {

    state = {
        data: {},
    }

    async componentDidMount() {
        const fetchedData = await fetchData();

        this.setState({ data: fetchedData });
    }


    render() {
        const { data } = this.state;
        return (
            <div className="container">
                <img className="images" src={images} alt="COVID-19" />
                <h1 className="title_covid">INDONESIA</h1>
                <Cards data={data} />
            </div>
        );
    }
}

export default App;
import React, { Component } from 'react';
import AnyChart from './AnyChart';

import './App.css';


class Map extends Component {

  // start state
  state = {
    filterByPopulation: 500000,
    data: null,
    filteredData: null,
    errorMessage: ''
  }

// take info from json
  componentWillMount() {
    let self = this;
    if(this.state.data === null) {
      fetch('./citys.json').then(data => data.json() ).then(function(data) {
	       self.setState({data: data});
    });
    }
  }

// enter and min_population
  handleChange = (e) => {
    const options = {
      ENTER_CODE: 13,
      MIN_POPULATION: 300000,
    }

// can use spaces
    let count = parseInt(e.target.value.replace(/ /ig, ''));

// input population
    if(e.keyCode === options.ENTER_CODE) {
      if(count > options.MIN_POPULATION) {
        this.setState({ filteredData: this.state.data.filter((item, index) => item.value >= count), errorMessage: '' });
      } else {
        this.setState({ errorMessage: ` Enter population biger then ${options.MIN_POPULATION}` });
      }
    }
  }

  render() {
    return (
        <div className="forMap">
          <h3>World population map</h3>
          <div className="map">
            <p className="textForMap">Population</p>
            <label><input className="inputForMap" onKeyDown={this.handleChange} type="text" name=""/>{this.state.errorMessage}</label>
            {
              this.state.data ? <AnyChart data={this.state.filteredData || this.state.data.filter(item => item.value >= 500000) }/> : null
            }
          </div>
        </div>
      );
    }

}

export default Map;

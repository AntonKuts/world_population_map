import React, { Component } from 'react';
import  anychart from 'anychart';

export default class AnyChart extends Component {

  componentDidMount() {
    this.anychartLoader();
  }

  componentDidUpdate() {
    this._map.innerHTML = '';
    this.anychartLoader();
  }

  anychartLoader() {
    let self = this;
    if(this.props.data) {
        let WorldMap = anychart.map();
        var dataSet_lat_long = anychart.data.set(self.props.data);

        // Creates the marker series
        var series_lat_long = WorldMap.marker(dataSet_lat_long);

        // format the tooltips of the lat_long series
        series_lat_long.tooltip().format("Population: {%value}");

        // create choropleth series
        let series = WorldMap.choropleth(dataSet_lat_long);

        // set geoIdField to 'id', this field contains in geo data meta properties
        series.geoIdField('name');

        // set geo data, you can find this map in our geo maps collection
        // https://cdn.anychart.com/#maps-collection
        WorldMap.geoData(anychart.maps['world_source']);

        //set map container id (div)
        WorldMap.container('map');

        //initiate map drawing
        WorldMap.draw();
    }
  }

  render() {
      let {data} = this.props;
      return (
        <div className="forMap">
          <div id="map" className="map" ref={instance => this._map = instance}></div>
        </div>
      )
  }
}

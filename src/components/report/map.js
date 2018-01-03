import React, { Component } from 'react';
import FaEllipsisV from 'react-icons/lib/fa/ellipsis-v';

export class Map extends React.Component {
  render() {
    return (
      <div className="col-md">
        <div className="rounded-container p-4 mb-4">
          <div className="top-right">
            <a href="#"><FaEllipsisV /></a>
          </div>
          <h5>Map</h5>
        </div>
      </div>
    );
  }
}

export default Map;
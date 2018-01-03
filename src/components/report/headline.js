import React, { Component } from 'react';
import FaEllipsisV from "react-icons/lib/fa/ellipsis-v";

export class Headline extends React.Component {
  render() {
    return (
      <div className="rounded-container headline mb-4">
        <div className="row no-gutters">
          <div className="col-md impressions pt-4 pb-4">
            <div className="content">
              <h2>89,540</h2>
              <h3>Impressions</h3>
            </div>
          </div>
          <div className="col-md views">
            <div className="content pt-4 pb-4">
              <h2>12,000</h2>
              <h3>Views</h3>
            </div>
          </div>
          <div className="col-md vtr">
            <div className="content pt-4 pb-4">
              <h2>33.6%</h2>
              <h3>VTR</h3>
            </div>
          </div>
          <div className="col-md clicks">
            <div className="pt-4 pb-4">
              <h2>406</h2>
              <h3>Total clicks</h3>
            </div>
          </div>
          <div className="col-md completion pt-4 pb-4">
            <div className="top-right">
              <a href="#"><FaEllipsisV /></a>
            </div>
            <h2>31%</h2>
            <h3>Completion</h3>
          </div>
        </div>
        <div className="row">
          <div className="col p-4">
            <h1>Chart w Views & VTR</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Headline;
import React, { Component } from 'react';
import FaEllipsisV from 'react-icons/lib/fa/ellipsis-v';

export class Device extends React.Component {
  render() {
    return (
      <div className="col-md">

        <div className="rounded-container p-4 mb-4">
          <div className="top-right">
            <a href="#"><FaEllipsisV /></a>
          </div>
          <h5>Device</h5>
          <div className="row">
            <div className="col-md">
              <div className="mobile">
                <div>Mobile devices with full browsers</div>
                <div>Views 77,056 VTR 39.71%</div>
              </div>
              <div className="computer">
                Computers
              </div>
              <div className="tablet">
                Tablets with full browsers
              </div>
              <div className="unknown">
                Unknown
              </div>
            </div>
            <div className="col-md">
              chart
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Device;
import React, { Component } from 'react';
import FaEllipsisV from 'react-icons/lib/fa/ellipsis-v';

export class TopChannels extends React.Component {
  render() {
    return (
      <div className="col-md">
        <div className="rounded-container p-4 mb-4 video">
          <div className="top-right">
            <a href="#"><FaEllipsisV /></a>
          </div>
          <h5>Top Channels</h5>

          <div className="row">
            <div className="col-md-4">
              <img src="http://via.placeholder.com/500x500" className="float-left img-fluid" />
            </div>
            <div className="col-md-8">
              <div className="title">PewDiePie</div>
              58,172,006 subscribers<br />
              3,372 videos
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <img src="http://via.placeholder.com/500x500" className="float-left img-fluid" />
            </div>
            <div className="col-md-8">
              <h4>PewDiePie</h4>
              58,172,006 subscribers<br />
              3,372 videos
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <img src="http://via.placeholder.com/500x500" className="float-left img-fluid" />
            </div>
            <div className="col-md-8">
              <h4>PewDiePie</h4>
              58,172,006 subscribers<br />
              3,372 videos
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TopChannels;
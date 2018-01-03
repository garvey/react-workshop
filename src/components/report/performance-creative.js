import React, { Component } from 'react';
import FaSort from 'react-icons/lib/fa/sort';
import FaEllipsisV from 'react-icons/lib/fa/ellipsis-v';

export class PerformanceCreative extends React.Component {
  render() {
    return (
      <div className="col-md">
        <div className="rounded-container p-4 mb-4">
          <div className="top-right">
            <a href="#"><FaEllipsisV /></a>
          </div>
          <h5>Performace of creative</h5>

          <table className="table table-responsive-lg">
            <thead>
              <tr>
                <th scope="col">Creative <FaSort /></th>
                <th scope="col">Impressions <FaSort /></th>
                <th scope="col">Views <FaSort /></th>
                <th scope="col">VTR <FaSort /></th>
                <th scope="col">Clicks <FaSort /></th>
                <th scope="col">CTR <FaSort /></th>
                <th scope="col">Play 25% <FaSort /></th>
                <th scope="col">Play 50% <FaSort /></th>
                <th scope="col">Play 75% <FaSort /></th>
                <th scope="col">Play 100% <FaSort /></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Playmobil Dragons & School</th>
                <td>83,232</td>
                <td>25,297</td>
                <td>30.4%</td>
                <td>63</td>
                <td>0.08%</td>
                <td>63%</td>
                <td>43%</td>
                <td>35%</td>
                <td>31%</td>
              </tr>
              <tr>
                  <th scope="row">Playmobil Ghostbusters & Constructions</th>
                  <td>82,232</td>
                  <td>25,257</td>
                  <td>30.6%</td>
                  <td>68</td>
                  <td>0.08%</td>
                  <td>61%</td>
                  <td>40%</td>
                  <td>34%</td>
                  <td>31%</td>
                </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default PerformanceCreative;